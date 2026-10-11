import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import toast from "react-hot-toast";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/profile", "/category/:path", "/product/:path"],
};
