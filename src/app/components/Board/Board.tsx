"use client";

import React from "react";

import BoardContextProvider from "@/app/context/boardContext";

import styles from "./Board.module.css";
import { Card } from "../Card/Card";
import { Tile } from "../Tile/Tile";

export const cards: CardType[] = [
  { id: "1", color: "red" },
  { id: "2", color: "green" },
  { id: "3", color: "blue" },
];

export function Board() {
  const [width, height] = [8, 12];

  const field = Array.from({ length: height }, (_, y) =>
    Array.from({ length: width }, (_, x) => ({
      tile: [x, y].join("-") as TileType,
    }))
  );

  return (
    <BoardContextProvider>
      <div className={styles.board}>
        <aside className={styles.aside}>
          <div className={styles.stack}>
            {cards.map((card, idx) => (
              <Card key={idx} card={card} location="stack"></Card>
            ))}
          </div>
        </aside>
        <div
          className={styles.field}
          style={{
            gridTemplateColumns: `repeat(${width}, var(--tile-size))`,
          }}
        >
          {field.map((row) => {
            return row.map(({ tile }) => <Tile key={tile} tile={tile}></Tile>);
          })}
        </div>
      </div>
    </BoardContextProvider>
  );
}
