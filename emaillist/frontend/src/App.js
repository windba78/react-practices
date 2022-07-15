import React from "react";
import Emaillist from "./Emaillist";
import Searchbar from "./Searchbar";
import styles from "./assets/css/styles.css";
import emails from "./assets/json/data.json";

function App() {
  return (
    <div id={styles.App}>
      <Searchbar />
      <Emaillist emails={emails} />
    </div>
  );
}

export default App;
