import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const products = await prisma.product.findMany();
  return Response.json(products);
}

export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}
