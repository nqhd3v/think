import Joi from "joi";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { error } = Joi.object({
    pass: Joi.string().required(),
  }).validate(body);
  if (error) {
    return Response.json({ error }, { status: 400 });
  }

  const res = NextResponse.next();
  const hashed = await bcrypt.hash(body.pass, 5);
  const token = [
    hashed,
    "HttpOnly",
    `Max-Age=${60 * 60 * 24 * 30}`,
    "Secure",
    "SameSite=None",
  ].join("; ");
  res.cookies.set("__PRIVATE_MODE", token);
  return res;
}
