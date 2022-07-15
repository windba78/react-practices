import React from "react";

function EmailListItem({ firstName, lastName, email }) {
  return (
    <li>
      {firstName + lastName}
      <br />
      {email}
    </li>
  );
}

export default EmailListItem;
