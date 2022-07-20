import React from "react";
import styles from "./assets/css/KanbanBoard.css";
import CardList from "./CardList";
import cards from "./assets/json/data.json";

function KanbanBoard() {
  return (
    <div className={styles.KanbanBoard}>
      <CardList
        title={"ToDo"}
        cards={cards.filter((e) => e.status === "ToDo")}
      />
      <CardList
        title={"Doing"}
        cards={cards.filter((e) => e.status === "Doing")}
      />
      <CardList
        title={"Done"}
        cards={cards.filter((e) => e.status === "Done")}
      />
    </div>
  );
}

export default KanbanBoard;
