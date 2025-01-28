import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

    if (request.nextUrl.pathname === "/favicon.ico") {
      return new Response(null, { status: 204 }); // Respond with no content
    }
    
  // Apply middleware logic only for assetlinks.json
  if (pathname === "/.well-known/assetlinks.json") {
    const userAgent = request.headers.get("user-agent") || "";
    const token = request.headers.get("x-custom-token") || "";

    // Check if the request meets the required conditions
    if (!userAgent.includes("Android") || token !== "your-secret-token") {
      return new Response("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

// Apply the middleware only for specific paths
export const config = {
  matcher: ["/.well-known/assetlinks.json"],
};
