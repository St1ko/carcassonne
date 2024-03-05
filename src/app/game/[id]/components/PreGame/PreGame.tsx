"use client";

import { useSelf } from "~/liveblocks.config";

const PreGame: React.FC = () => {
  const me = useSelf();

  console.log(me);

  return <div>Game has not started</div>;
};

export { PreGame };
