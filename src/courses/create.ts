import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 320,
      name: "Curso de Java",
      description: "Curso de Java",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Diego Almeida",
          },
          create: {
            name: "Diego Almeida"
          }
        }
      }
    },
  });

  console.log(result);
}

main();