"use server";

import { cookies } from "next/headers";

export async function getUser() {
  return cookies().get("userId")?.value;
}
