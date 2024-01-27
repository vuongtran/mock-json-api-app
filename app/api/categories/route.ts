import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const categories = await prisma.category.findMany();
  return Response.json(categories);
}

export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}
