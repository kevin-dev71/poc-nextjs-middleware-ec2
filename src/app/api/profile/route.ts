import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
  const cookieStore = cookies();
  console.log(cookieStore.getAll(), "profile")
  const token = cookieStore.get("myTokenName");

  if (!token) {
    return Response.json({ error: "Not logged in" });
  }

  const response = jwt.verify(token.value, "secret");

  return NextResponse.json(response);
}
