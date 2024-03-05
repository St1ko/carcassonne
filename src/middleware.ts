import { NextResponse, NextRequest } from "next/server";

/* Users are identified by assigning them a random UUID,
   which is stored as userId in a session cookie. The userId 
   is used to authenticate them when creating or joining a room.

   This middleware checks the request's cookies for the userId. 
   If the cookie is not set, we set it with a newly generated 
   UUID on the request and response.
*/

export async function middleware(request: NextRequest) {
  const userId =
    request.cookies.get("userId")?.value ||
    (self.crypto.randomUUID() as string);

  if (!request.cookies.has("userId")) {
    request.cookies.set("userId", userId);
  }

  const response = NextResponse.next();

  if (!response.cookies.has("userId")) {
    response.cookies.set("userId", userId);
  }

  return response;
}
