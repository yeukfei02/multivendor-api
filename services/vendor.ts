import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getVendor = async (id: string) => {
  const vendor = await prisma.vendor.findUnique({
    where: {
      id: id,
    },
    include: {
      orders: true,
      vendor_products: true,
    },
  });
  return vendor;
};
