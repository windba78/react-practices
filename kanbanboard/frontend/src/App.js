import React from "react";
import styles from "./assets/css/App.css";
import KanbanBoard from "./KanbanBoard";

const App = () => {
  return (
    <div id={styles.App}>
      <KanbanBoard />
    </div>
  );
};

export default App;
