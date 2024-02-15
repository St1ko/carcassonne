import { Liveblocks } from "@liveblocks/node";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_otq8LilqSp_yOz7lru72SN6FZc393mNu2v8ZE8qiahY_0jwfG31U2Z3iIRBddmOM",
});

export async function getRooms() {
  const { data } = await liveblocks.getRooms();
  return data;
}

export async function createRoom(userId: string, formData: FormData) {
  const roomId = formData.get("name") as string;

  if (roomId) {
    const room = await liveblocks.createRoom(roomId, {
      defaultAccesses: ["room:read", "room:presence:write"],
      usersAccesses: {
        [userId]: ["room:write"],
      },
      metadata: { gameState: "pregame" },
    });

    return room;
  } else {
    return "Name cannot be empty";
  }
}

export async function deleteRoom(roomId: string) {
  await liveblocks.deleteRoom(roomId);
}
