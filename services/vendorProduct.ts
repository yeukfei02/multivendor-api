import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProductVendors = async (
  product_id: string,
  vendor_id: string
) => {
  const productVendors = await prisma.vendor_product.findMany({
    where: {
      product_id: product_id,
      vendor_id: vendor_id,
    },
    include: {
      vendor: true,
      product: true,
    },
  });
  return productVendors;
};

export const getVendorProducts = async (
  vendor_id: string,
  sub_id: string,
  category_id: string
) => {
  const vendorProducts = await prisma.vendor_product.findMany({
    where: {
      vendor_id: vendor_id,
    },
    include: {
      vendor: true,
      product: true,
    },
  });
  return vendorProducts;
};
