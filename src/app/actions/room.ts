"use server";

import { Liveblocks } from "@liveblocks/node";

import { getUser } from "./user";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_otq8LilqSp_yOz7lru72SN6FZc393mNu2v8ZE8qiahY_0jwfG31U2Z3iIRBddmOM",
});

export async function getRooms() {
  const { data } = await liveblocks.getRooms();
  return data;
}

export async function getRoom(roomId: string) {
  const room = await liveblocks.getRoom(roomId);
  return room;
}

export async function createRoom(formData: FormData) {
  const roomId = formData.get("name") as string;
  const userId = await getUser();

  if (!userId) {
    throw new Error("Unauthorized access: Could not identify user.");
  } else if (!roomId) {
    throw new Error("Bad request: Missing room name.");
  } else {
    const room = await liveblocks.createRoom(roomId, {
      defaultAccesses: ["room:read", "room:presence:write"],
      usersAccesses: {
        [userId]: ["room:write"],
      },
      metadata: { gameState: "pregame" },
    });

    return room;
  }
}

export async function deleteRoom(roomId: string) {
  await liveblocks.deleteRoom(roomId);
}
