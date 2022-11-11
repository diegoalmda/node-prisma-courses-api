import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Diego Almeida",
      books: {
        createMany: {
          data: [
            {
              name: "Como começar na programação"
            },
            {
              name: "Como ser produtivo"
            },
          ]
        }
      }
    },
  });

  console.log(result);
}

main();