"use client";

import React, { useState } from "react";

import { useMutation, useStorage } from "root/liveblocks.config";

import styles from "./Tile.module.css";
import { Card } from "../Card/Card";

interface Props {
  tile: TileType;
}

const Tile: React.FC<Props> = ({ tile }) => {
  const board = useStorage((root) => root.game.board);
  const card = board.get(tile);
  const [over, setOver] = useState(false);

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

  const dragEnterHandler = (): void => {
    if (!card) {
      setOver(true);
    }
  };

  const dragLeaveHandler = (): void => setOver(false);

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setOver(false);

    if (!card) {
      const { card, from } = JSON.parse(
        event.dataTransfer.getData("text/plain")
      );
      moveCard(card, tile, from);
    }
  };

  return (
    <div
      className={`${styles.tile} ${over ? styles.over : ""}`}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      {card && <Card card={card} location={tile}></Card>}
    </div>
  );
};

export { Tile };
