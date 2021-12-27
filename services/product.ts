import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      brand: true,
      order_items: true,
      category_products: true,
      vendor_products: true,
    },
  });
  return product;
};

export const getBrandProducts = async (brand_id: string) => {
  const brandProducts = await prisma.product.findMany({
    where: {
      brand_id: brand_id,
    },
    include: {
      brand: true,
      order_items: true,
      category_products: true,
      vendor_products: true,
    },
  });
  return brandProducts;
};
