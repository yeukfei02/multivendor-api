import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProductCategories = async (category_id: string) => {
  const productCategories = await prisma.product.findMany({
    where: {
      category_products: {
        every: {
          category_id: category_id,
        },
      },
    },
  });

  return productCategories;
};

export const getProductSubCategories = async (sub_id: string) => {
  const productSubCategories = await prisma.product.findMany({
    where: {
      category_products: {
        every: {
          sub_id: sub_id,
        },
      },
    },
  });

  return productSubCategories;
};

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
