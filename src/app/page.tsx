import dynamic from "next/dynamic";

import styles from "./page.module.css";

const RoomOverview = dynamic(
  () => import("./components/RoomOverview/RoomOverview"),
  {
    ssr: false,
  }
);

const Home: React.FC = async () => {
  return (
    <main className={styles.main}>
      <RoomOverview />
    </main>
  );
};

export default Home;
