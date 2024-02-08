import { Board } from "./components/Board/Board";
import GameContextProvider from "./context/gameContext";
import styles from "./page.module.css";
import { Room } from "./room";

export default function Home() {
  return (
    <main className={styles.main}>
      <Room>
        <GameContextProvider>
          <Board />
        </GameContextProvider>
      </Room>
    </main>
  );
}
