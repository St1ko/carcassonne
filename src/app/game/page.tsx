import { Board } from "./components/Board/Board";
import styles from "./page.module.css";
import { Room } from "./room";

export default function Home() {
  return (
    <main className={styles.main}>
      <Room>
        <Board />
      </Room>
    </main>
  );
}
