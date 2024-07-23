// not used

import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ["https://accounts.spotify.com/", "*"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, application/json",
};

export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = "*";
  console.log("middleware is used");
  console.log("origin : ", origin);
  const isAllowedOrigin = allowedOrigins.includes(origin);
  console.log("isAllowedOrigin : ", isAllowedOrigin);

  // Handle preflighted requests
  const isPreflight = request.method === "GET";
  console.log(isPreflight);
  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { "Access-Control-Allow-Origin": "*" }),
      ...corsOptions,
    };

    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;

    // console.log(preflightHeaders);
    // return NextResponse.json({}, { headers: preflightHeaders });
  }

  // Handle simple requests
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*");

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
