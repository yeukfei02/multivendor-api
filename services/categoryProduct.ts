import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCategoryProducts = async (category_id: string) => {
  const categoryProducts = await prisma.category_product.findMany({
    where: {
      category_id: category_id,
    },
    include: {
      category: true,
      product: true,
    },
  });
  return categoryProducts;
};

export const getSubCategoryProducts = async (sub_id: string) => {
  const subCategoryProducts = await prisma.category_product.findMany({
    where: {
      sub_id: sub_id,
    },
    include: {
      category: true,
      product: true,
    },
  });
  return subCategoryProducts;
};
