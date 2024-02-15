import React, { useState } from "react";

import styles from "./Card.module.css";
import { colorMapping } from "../../models/cards";

interface Props {
  card: CardType;
  location?: TileType;
}

const Card: React.FC<Props> = ({ card, location }) => {
  const [dragging, setDragging] = useState(false);

  const dragStartHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    setDragging(true);

    const data = { card: card, from: location };
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  };

  const dragEndHandler = (): void => setDragging(false);

  const style = {
    backgroundColor: colorMapping[card.id],
    ...(card.rotation && { transform: `rotate(${card.rotation}deg)` }),
    ...(dragging && { opacity: 0.4 }),
  };

  return (
    <div
      className={styles.card}
      style={style}
      draggable="true"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
    />
  );
};

export { Card };
