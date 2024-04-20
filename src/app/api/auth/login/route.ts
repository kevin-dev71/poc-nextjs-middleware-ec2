import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const cookieStore = cookies();

  if (email === "admin@admin.com" && password === "admin") {
    // expire in 30 days
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email,
        username: "admin user",
      },
      "secret"
    );

    cookieStore.set({
      name: "myTokenName",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    return Response.json({
      token,
    }, {
      status: 200,
    }) ;
  } else {
    return Response.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }
}
