import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
 
  const { pathname } = request.nextUrl;
console.log("Middleware executed for:", pathname);
  if (pathname === "/.well-known/assetlinks.json") {
    return new Response("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/.well-known/assetlinks.json",
    "/((?!api|_next/static|_next/image|favicon.ico).*)", 
  ],
};

