import prisma from "@/lib/prisma";
import { ok, serverError } from "@/lib/http-response-status";

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany();
    return ok(users);
  } catch (ex) {
    return serverError();
  }
}

export async function POST(request: Request) {
  const res = await request.json();
  return ok({ res });
}
