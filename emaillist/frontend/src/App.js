import React, { useState } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";

import data from "./assets/json/data.json";

const App = () => {
  const [emails, setEmails] = useState(data);

  const notifyEmailAdd = (email) => {
    console.log(email);
  };

  const notifyKeywordChanged = (keyword) => {
    console.log(keyword);
  };

  return (
    <div id={"App"}>
      <RegisterForm callback={notifyEmailAdd} />
      <SearchBar callback={notifyKeywordChanged} />
      <Emaillist emails={emails} />
    </div>
  );
};

export default App;
