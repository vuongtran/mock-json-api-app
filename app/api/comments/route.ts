import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const comments = await prisma.comment.findMany();
  return Response.json(comments);
}

export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}
