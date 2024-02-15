import styles from "./Field.module.css";
import { Tile } from "../Tile/Tile";

interface Props {
  size: number;
}

const Field: React.FC<Props> = ({ size }) => {
  const field = Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) => ({
      tile: [x, y].join("-") as TileType,
    }))
  );

  return (
    <div
      className={styles.field}
      style={{
        gridTemplateColumns: `repeat(${size}, var(--tile-size))`,
      }}
    >
      {field.map((row) => {
        return row.map(({ tile }) => <Tile key={tile} tile={tile}></Tile>);
      })}
    </div>
  );
};

export { Field };
