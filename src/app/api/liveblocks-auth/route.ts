import { Liveblocks } from "@liveblocks/node";
import { cookies } from "next/headers";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_otq8LilqSp_yOz7lru72SN6FZc393mNu2v8ZE8qiahY_0jwfG31U2Z3iIRBddmOM",
});

function getUserIdFromCookies() {
  return cookies().get("user")?.value;
}

export async function POST() {
  const userId = getUserIdFromCookies();

  if (userId) {
    const { status, body } = await liveblocks.identifyUser(
      {
        userId: userId,
        groupIds: [],
      },
      { userInfo: {} }
    );

    return new Response(body, { status });
  } else {
    return new Response("Could not identify user", { status: 422 });
  }
}
