import { Board } from "./components/Board/Board";
import styles from "./page.module.css";
import { Room } from "./room";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Room>
        <Board />
      </Room>
    </main>
  );
};

export default Home;
