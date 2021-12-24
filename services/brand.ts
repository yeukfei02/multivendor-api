import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBrand = async (id: string) => {
  const brand = await prisma.brand.findUnique({
    where: {
      id: id,
    },
    include: {
      products: true,
    },
  });
  return brand;
};
