import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addDeliveryAddress = async (
  address: string,
  geo_code: string,
  comment: string,
  phone: string,
  user_id: string
) => {
  const deliveryAddress = await prisma.delivery_address.create({
    data: {
      address: address,
      geo_code: geo_code,
      comment: comment,
      phone: phone,
      user_id: user_id,
    },
  });
  return deliveryAddress;
};

export const getDeliveryAddresses = async (user_id: string) => {
  const deliveryAddresses = await prisma.delivery_address.findMany({
    where: {
      user_id: user_id,
    },
    include: {
      users: true,
    },
  });
  return deliveryAddresses;
};

export const getDeliveryAddress = async (id: string) => {
  const deliveryAddress = await prisma.delivery_address.findUnique({
    where: {
      id: id,
    },
    include: {
      users: true,
    },
  });
  return deliveryAddress;
};
