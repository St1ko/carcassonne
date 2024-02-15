import { Board } from "./components/Board/Board";
import styles from "./page.module.css";
import { Room } from "./room";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = ({ params }) => {
  return (
    <main className={styles.main}>
      <Room id={params.id}>
        <Board />
      </Room>
    </main>
  );
};

export default Home;
