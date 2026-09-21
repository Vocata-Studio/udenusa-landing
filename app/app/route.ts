import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) =>
  NextResponse.redirect(new URL("/download/", request.url), { status: 302 });
