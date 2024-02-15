"use server";

import { randomUUID } from "crypto";

export async function generateUser() {
  return randomUUID();
}
