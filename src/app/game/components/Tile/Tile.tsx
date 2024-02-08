"use client";

import React from "react";

import { useMutation, useStorage } from "root/liveblocks.config";

import styles from "./Tile.module.css";
import { Card } from "../Card/Card";

interface Props {
  tile: TileType;
}

export const Tile: React.FC<Props> = ({ tile }) => {
  const board = useStorage((root) => root.game.board);

  const moveCard = useMutation(
    ({ storage }, card: CardType, to: TileType, from?: TileType) => {
      const game = storage.get("game");
      const board = game.get("board");

      if (from === undefined) {
        const stack = game.get("stack");
        stack.delete(0);
      } else {
        board.delete(from);
      }

      board.set(to, card);
    },
    []
  );

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const { card, from } = JSON.parse(event.dataTransfer.getData("text/plain"));
    moveCard(card, tile, from);
  };

  const card = board.get(tile);

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
