import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addPhoneConfirmation = async (
  phone: string,
  code: string,
  ip: string
) => {
  const phoneConfirmation = await prisma.phone_confirmation.create({
    data: {
      phone: phone,
      code: code,
      ip: ip,
    },
  });
  return phoneConfirmation;
};

export const getPhoneConfirmation = async (phone: string, code: string) => {
  const phoneConfirmation = await prisma.phone_confirmation.findFirst({
    where: {
      phone: phone,
      code: code,
    },
  });
  return phoneConfirmation;
};
