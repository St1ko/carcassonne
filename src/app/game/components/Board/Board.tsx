import React from "react";

import styles from "./Board.module.css";
import { Stack } from "../Stack/Stack";
import { Tile } from "../Tile/Tile";

export function Board() {
  const [width, height] = [8, 12];

  const field = Array.from({ length: height }, (_, y) =>
    Array.from({ length: width }, (_, x) => ({
      tile: [x, y].join("-") as TileType,
    }))
  );

  return (
    <div className={styles.board}>
      <aside className={styles.aside}>
        <Stack />
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
  );
}
