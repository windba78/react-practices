import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./assets/scss/Task.scss";

export default function Task({ no, name, done, notifyChangeTaskDone }) {
  const [checked, setChecked] = useState(done);

  return (
    <li className={styles.Task}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {name}
      <a href="#" className={styles.Task__remove} />
    </li>
  );
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
};
