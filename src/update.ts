import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "0f37577a-f9fe-44b9-bd51-607e4616a3d0"
    },
    data: {
      duration: 120,
    }
  });

  console.log(result);
}

main();