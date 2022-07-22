import React, { useState } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";

import data from "./assets/json/data.json";

const App = () => {
  const [emails, setEmails] = useState(data);

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

  return (
    <div id={"App"}>
      <RegisterForm callback={notifyEmailAdd} />
      <SearchBar callback={notifyKeywordChanged} />
      <Emaillist emails={emails} callback={notifyEmailDelete} />
    </div>
  );
};

export default App;
