import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

// additional
function App() {
  return (
    <div style={{ color: "red" }}>
      {/* example */}
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faCheckCircle} />
      <FontAwesomeIcon icon={faTimesCircle} />

      {/* soild */}

      {/* regular */}

      {/* brands */}
    </div>
  );
}

export default App;
