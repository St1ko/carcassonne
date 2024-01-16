"use client";

import React, { useContext } from "react";

import { GameContext } from "@/app/game/context/gameContext";

import styles from "./Tile.module.css";
import { Card } from "../Card/Card";

interface Props {
  tile: TileType;
}

export const Tile: React.FC<Props> = ({ tile }) => {
  const { board, moveCard } = useContext(GameContext) as GameContextType;

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const { card, from } = JSON.parse(event.dataTransfer.getData("text/plain"));
    moveCard(card, tile, from);
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
