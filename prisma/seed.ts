import prisma from "../lib/prisma";
import { faker } from "@faker-js/faker";

async function _TRUNCATE() {
  // Reset auto increment counter in postgres
  await prisma.$queryRaw`TRUNCATE public."Comment", public."Post", public."Todo", public."User", public."Category", public."Product" RESTART IDENTITY`;
  console.log("_TRUNCATE Comment, Post, Todo, User successfully...");
}

async function seedCategory() {
  const categories = Array.from({ length: 20 }, () => {
    return {
      name: faker.lorem.text(),
      description: faker.commerce.productDescription(),
    };
  });
  await prisma.category.deleteMany();
  await prisma.category.createMany({ data: categories, skipDuplicates: true });
  console.log("Seed Category successfully...");
}

async function seedProduct() {
  const categories = prisma.category.findMany();
  (await categories).forEach(async (category) => {
    const products = Array.from({ length: 100 }, () => {
      return {
        category_id: category.id,
        price: faker.commerce.price(),
        image: faker.image.url(),
        slug: faker.lorem.slug(),
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
      };
    });
    await prisma.product.deleteMany();
    await prisma.product.createMany({ data: products, skipDuplicates: true });
  });
  console.log("Seed Product successfully...");
}

async function seedPosts() {
  const posts = Array.from({ length: 100 }, () => {
    return {
      title: faker.lorem.text(),
      content: faker.lorem.paragraph(),
      slug: faker.lorem.slug(),
    };
  });
  await prisma.post.deleteMany();
  await prisma.post.createMany({ data: posts, skipDuplicates: true });
  console.log("Seed Post successfully...");
}

async function seedComments() {
  const posts = prisma.post.findMany();
  (await posts).forEach(async (post) => {
    const comments = Array.from({ length: 20 }, () => {
      return {
        post_id: post.id,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        content: faker.lorem.text(),
      };
    });
    await prisma.comment.deleteMany();
    await prisma.comment.createMany({ data: comments, skipDuplicates: true });
  });
  console.log("Seed Comment successfully...");
}

async function seedTodos() {
  const todos = Array.from({ length: 200 }, () => {
    return {
      title: faker.lorem.text(),
      description: faker.lorem.paragraph(),
    };
  });
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({ data: todos, skipDuplicates: true });
  console.log("Seed Todo successfully...");
}

async function seedUsers() {
  const users = Array.from({ length: 20 }, () => {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
    };
  });
  await prisma.user.deleteMany();
  await prisma.user.createMany({ data: users, skipDuplicates: true });
  console.log("Seed User successfully...");
}

async function main() {
  await _TRUNCATE();
  await seedUsers();
  await seedTodos();
  await seedPosts();
  await seedComments();
  await seedCategory();
  await seedProduct();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
