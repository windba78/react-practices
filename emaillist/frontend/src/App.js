import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";

const App = () => {
  const [emails, setEmails] = useState([]);

  const emailDelete = (no) => {
    console.log(no);
  };

  const emailAdd = async (email) => {
    try {
      const response = await fetch("/api", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(email),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      setEmails([json.data, ...emails]);
    } catch (err) {
      console.error(err);
    }
  };

  const keywordChanged = async (keyword) => {
    try {
      const response = await fetch(`/api?kw=${keyword}`, {
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
  };

  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);

  return (
    <div id={"App"}>
      <RegisterForm callback={emailAdd} />
      <SearchBar callback={keywordChanged} />
      <Emaillist emails={emails} callback={emailDelete} />
    </div>
  );
};

export default App;
