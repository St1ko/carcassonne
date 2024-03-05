import { Liveblocks } from "@liveblocks/node";

import { getUser } from "@/app/actions/user";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_otq8LilqSp_yOz7lru72SN6FZc393mNu2v8ZE8qiahY_0jwfG31U2Z3iIRBddmOM",
});

export async function POST() {
  const userId = await getUser();

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
