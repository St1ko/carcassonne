import React from "react";

import styles from "./Card.module.css";

interface Props {
  card: CardType;
  location: BoardLocation;
}

export const Card: React.FC<Props> = ({ card, location }) => {
  const dragStartHandler = (ev) => {
    const data = { card: card, from: location };
    ev.dataTransfer.setData("text/plain", JSON.stringify(data));
    ev.dataTransfer.effectAllowed = "move";
  };

  const style = {
    backgroundColor: card.color,
    ...(card.rotation && { transform: `rotate(${card.rotation}deg)` }),
  };

  return (
    <div
      className={styles.card}
      style={style}
      draggable="true"
      onDragStart={dragStartHandler}
    ></div>
  );
};
