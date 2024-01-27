import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const posts = await prisma.post.findMany();
  return Response.json(posts);
}

export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}
