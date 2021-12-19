import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addCompany = async (
  code: string,
  name: string,
  address: string,
  user_id: string
) => {
  const company = await prisma.company.create({
    data: {
      code: code,
      name: name,
      address: address,
      user_id: user_id,
    },
  });
  return company;
};

export const getCompanies = async (user_id: string) => {
  const companies = await prisma.company.findMany({
    where: {
      user_id: user_id,
    },
    include: {
      users: true,
    },
  });
  return companies;
};

export const getCompany = async (id: string) => {
  const company = await prisma.company.findUnique({
    where: {
      id: id,
    },
    include: {
      users: true,
    },
  });
  return company;
};
