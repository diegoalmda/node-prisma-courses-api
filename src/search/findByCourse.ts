import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "cd93cca5-a675-4ffd-92fb-6981e3df47d2"
    },
    include: {
      modules: true,
    }
  });

  console.log(JSON.stringify(result))
}

main();