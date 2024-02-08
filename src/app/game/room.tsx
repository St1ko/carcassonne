"use client";

import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

import { cards, shuffle } from "./models/cards";
import { RoomProvider } from "../../../liveblocks.config";

const shuffledCards = shuffle(cards);

export function Room({ children }: { children: React.ReactNode }) {
  return (
    <RoomProvider
      id="my-room"
      initialPresence={{ cursor: null }}
      initialStorage={{
        game: new LiveObject({
          board: new LiveMap(),
          stack: new LiveList(shuffledCards),
        }),
      }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
