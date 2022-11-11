import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo JSP do zero",
      name: "Aprendendo JSP",
      courses: {
        create: {
          course: {
            connect: {
              id: "8a89689a-2968-4917-aa4e-0473e216aacd"
            }
          }
        }
      }
    }
  });
}

main();