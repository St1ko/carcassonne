"use client";

import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "../../../liveblocks.config";

export function Room({ children }: { children: React.ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{ cursor: null }}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
