import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";

const App = () => {
  const [emails, setEmails] = useState([]);

  const notifyEmailDelete = (no) => {
    console.log(no);
  };

  const notifyEmailAdd = (email) => {
    console.log(email);
  };

  const notifyKeywordChanged = (keyword) => {
    const result = data.filter(
      (e) =>
        e.firstName.indexOf(keyword) !== -1 ||
        e.lastName.indexOf(keyword) !== -1 ||
        e.email.indexOf(keyword) !== -1
    );

    setEmails(result);
  };

  useEffect(async () => {
    try {
      const response = await fetch("/api", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: null,
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      setEmails(json.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div id={"App"}>
      <RegisterForm callback={notifyEmailAdd} />
      <SearchBar callback={notifyKeywordChanged} />
      <Emaillist emails={emails} callback={notifyEmailDelete} />
    </div>
  );
};

export default App;
