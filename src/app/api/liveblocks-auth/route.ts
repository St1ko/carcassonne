import { Liveblocks } from "@liveblocks/node";
import { cookies } from "next/headers";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_otq8LilqSp_yOz7lru72SN6FZc393mNu2v8ZE8qiahY_0jwfG31U2Z3iIRBddmOM",
});

function getUserIdFromCookies() {
  let user = cookies().get("user")?.value;

  return user;
}

export async function POST() {
  const userId = getUserIdFromCookies();

  const { status, body } = await liveblocks.identifyUser(
    {
      // fix this
      userId: userId,
      groupIds: [],
    },
    { userInfo: {} }
  );

  return new Response(body, { status });
}
