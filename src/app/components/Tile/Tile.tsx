import React, { useContext } from "react";

import { BoardContext } from "@/app/context/boardContext";

import styles from "./Tile.module.css";
import { Card } from "../Card/Card";

interface Props {
  tile: TileType;
}

export const Tile: React.FC<Props> = ({ tile }) => {
  const { board, moveCard } = useContext(BoardContext) as BoardContextType;

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const { card, from } = JSON.parse(event.dataTransfer.getData("text/plain"));
    moveCard(card, from, tile);
  };

  const card = board[tile];

  return (
    <div
      className={`${styles.tile} ${false ? styles.over : ""}`}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      {card && <Card card={card} location={tile}></Card>}
    </div>
  );
};
