import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname === "/redirect-to-corpodemae") {
    return NextResponse.redirect("https://corpodemae.com", 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/redirect-to-corpodemae"],
};
