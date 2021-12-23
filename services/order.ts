import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addOrder = async (
  number: number,
  status: string,
  comment: string,
  address: string,
  delivery_at: string,
  delivery_price: number,
  discount: number,
  total: number,
  user_id: string,
  company_id: string,
  vendor_id: string
) => {
  const order = await prisma.order.create({
    data: {
      number: number,
      status: status,
      comment: comment,
      address: address,
      delivery_at: delivery_at,
      delivery_price: delivery_price,
      discount: discount,
      total: total,
      user_id: user_id,
      company_id: company_id,
      vendor_id: vendor_id,
    },
  });
  return order;
};

export const getOrders = async (user_id: string) => {
  const orders = await prisma.order.findMany({
    where: {
      user_id: user_id,
    },
    include: {
      users: true,
      company: true,
      vendor: true,
    },
  });
  return orders;
};

export const getOrder = async (id: string) => {
  const order = await prisma.order.findUnique({
    where: {
      id: id,
    },
    include: {
      users: true,
      company: true,
      vendor: true,
    },
  });
  return order;
};
