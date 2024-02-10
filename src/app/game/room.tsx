"use client";

import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "root/liveblocks.config";

import { cards, shuffle } from "./models/cards";

export function Room({ children }: { children: React.ReactNode }) {
  return (
    <RoomProvider
      id="my-room"
      initialPresence={{ cursor: null }}
      initialStorage={{
        game: new LiveObject({
          board: new LiveMap(),
          stack: new LiveList(shuffle(cards)),
        }),
      }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
