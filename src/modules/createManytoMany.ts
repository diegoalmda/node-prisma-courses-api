import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "8a89689a-2968-4917-aa4e-0473e216aacd",
      fk_id_module: "8a89689a-2968-4917-aa4e-0473e216aacd"
    }
  });
}

main();