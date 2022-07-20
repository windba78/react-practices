import React, { useState } from "react";
import styles from "./assets/css/Task.css";

function Task({ name, done }) {
  const [checked, setChecked] = useState(done);

  return (
    <li className={styles.TaskList__Task}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />{" "}
      {name}
      <a href="#" className={styles.TaskList__Task__remove}></a>
    </li>
  );
}

export default Task;
