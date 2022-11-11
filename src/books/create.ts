import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetuta limpa",
      author_id: "6a12deb6-545b-4dc0-9f64-9a9aa03d59a5"
    },
  });

  console.log(result);
}

main();