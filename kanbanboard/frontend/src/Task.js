import React from "react";
import PropTypes from "prop-types";
import styles from "./assets/scss/Task.scss";

export default function Task({ no, name, done, notifyChangeTaskDone }) {
  return (
    <li className={styles.Task}>
      <input type="checkbox" checked={done === "Y"} />
      {name}
      <a href="#" className={styles.Task__remove} />
    </li>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
};
