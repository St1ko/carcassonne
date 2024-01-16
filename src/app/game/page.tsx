import { Board } from "./components/Board/Board";
import GameContextProvider from "./context/gameContext";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <GameContextProvider>
        <Board />
      </GameContextProvider>
    </main>
  );
}
