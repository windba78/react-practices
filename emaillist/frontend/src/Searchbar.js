import React from "react";
import styles from "./assets/scss/SearchBar.scss";

export default function SearchBar({ callback }) {
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="찾기"
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  );
}
