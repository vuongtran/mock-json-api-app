import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { ok, serverError } from "@/lib/http-response-status";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(params.id) },
    });
    return ok(user ?? {});
  } catch (ex) {
    return serverError();
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    return ok(body);
  } catch (ex) {
    return serverError();
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    return ok(body);
  } catch (ex) {
    return serverError();
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    return ok({ success: true, id: params.id });
  } catch (ex) {
    return serverError();
  }
}
