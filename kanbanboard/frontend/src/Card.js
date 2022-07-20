import React from "react";
import styles from "./assets/css/Card.css";
import TaskList from "./TaskList";

function Card({ title, description, tasks }) {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__Title}>{title}</div>
      <div className={"Card__Details"}>{description}</div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Card;
