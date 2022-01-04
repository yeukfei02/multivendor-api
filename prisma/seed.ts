import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function () {
  await prisma.users.create({
    data: {
      phone: "99998888",
      type: "test",
    },
  });
})();
