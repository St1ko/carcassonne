import React from "react";

import styles from "./Cursor.module.css";

const cursorColors = [
  "#E57373",
  "#9575CD",
  "#4FC3F7",
  "#81C784",
  "#FFF176",
  "#FF8A65",
  "#F06292",
  "#7986CB",
];

type Props = {
  color: string;
  x: number;
  y: number;
};

const Cursor: React.FC<Props> = ({ color, x, y }) => {
  return (
    <div
      className={styles.cursor}
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    >
      <svg width="32" height="44" viewBox="0 0 24 36" fill="none">
        <path
          fill={color}
          d="M0.928548 2.18278C0.619075 1.37094 1.42087 0.577818 2.2293 0.896107L14.3863 5.68247C15.2271 6.0135 15.2325 7.20148 14.3947 7.54008L9.85984 9.373C9.61167 9.47331 9.41408 9.66891 9.31127 9.91604L7.43907 14.4165C7.09186 15.2511 5.90335 15.2333 5.58136 14.3886L0.928548 2.18278Z"
        />
      </svg>
    </div>
  );
};

export { Cursor, cursorColors };
