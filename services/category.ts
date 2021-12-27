import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCategories = async () => {
  const categories = await prisma.category.findMany({
    include: {
      category_products: true,
    },
  });
  return categories;
};

export const getCategory = async (id: string) => {
  const category = await prisma.category.findUnique({
    where: {
      id: id,
    },
    include: {
      category_products: true,
    },
  });
  return category;
};

export const getSubCategories = async (sub_id: string) => {
  const categories = await prisma.category.findMany({
    where: {
      sub_id: sub_id,
    },
    include: {
      category_products: true,
    },
  });
  return categories;
};
