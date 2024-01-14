import React, { useContext } from "react";

import { BoardContext } from "@/app/context/boardContext";

import styles from "./Tile.module.css";
import { Card } from "../Card/Card";

interface Props {
  tile: TileType;
}

export const Tile: React.FC<Props> = ({ tile }) => {
  const { board, moveCard } = useContext(BoardContext) as BoardContextType;

  // TODO: fix ev type
  const dragOverHandler = (ev: any) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  };

  // TODO: fix ev type
  const dropHandler = (ev: any) => {
    ev.preventDefault();
    const { card, from } = JSON.parse(ev.dataTransfer.getData("text/plain"));

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
