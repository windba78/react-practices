import React from "react";
import styles from "./assets/css/styles.css";
import EmaillistItem from "./EmaillistItem";

function Emaillist({ emails }) {
  return (
    <div className={styles.Emaillist}>
      <ul>
        {emails.map((email) => (
          <EmaillistItem
            key={email.no}
            firstName={email.firstName}
            lastName={email.lastName}
            email={email.email}
          />
        ))}
      </ul>
    </div>
  );
}

export default Emaillist;
