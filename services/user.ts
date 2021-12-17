import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addUser = async (phone: string) => {
  const user = await prisma.users.create({
    data: {
      phone: phone,
      type: "test",
    },
  });
  return user;
};

export const getUser = async (phone: string) => {
  const user = await prisma.users.findFirst({
    where: {
      phone: phone,
    },
  });
  return user;
};
