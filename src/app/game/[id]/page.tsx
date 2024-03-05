import { getRoom } from "@/app/actions/room";

import { Board } from "./components/Board/Board";
import { PreGame } from "./components/PreGame/PreGame";
import styles from "./page.module.css";
import { Room } from "./room";

interface Props {
  params: { id: string };
}

const Home: React.FC<Props> = async ({ params }) => {
  const room = await getRoom(params.id);
  const isPregame = room.metadata.gameState === "pregame";

  return (
    <main className={styles.main}>
      <Room id={params.id}>{isPregame ? <PreGame /> : <Board />}</Room>
    </main>
  );
};

export default Home;
