import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addUser = async (phone: string) => {
  const users = await prisma.users.create({
    data: {
      phone: phone,
      type: "test",
    },
  });
  return users;
};

export const getUser = async (phone: string) => {
  const users = await prisma.users.findFirst({
    where: {
      phone: phone,
    },
  });
  return users;
};
