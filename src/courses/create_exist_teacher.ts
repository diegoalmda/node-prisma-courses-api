import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 220,
      name: "Curso de Swift",
      description: "Curso de Swift muito bom",
      teacher: {
        connect: {
          id: "cd93cca5-a675-4ffd-92fb-6981e3df47d2",          
        }
      }
    },
  });

  console.log(result);
}

main();