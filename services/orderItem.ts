import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getOrderItems = async (order_id: string) => {
  const orderItems = await prisma.order_item.findMany({
    where: {
      order_id: order_id,
    },
  });
  return orderItems;
};
