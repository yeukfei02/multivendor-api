import { addCompany, getCompanies, getCompany } from "../services/company";

export const addCompanyControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (args && args.input) {
    const input = args.input;
    const { code, name, address, user_id } = input;

    await addCompany(code, name, address, user_id);
  }

  const response = {
    message: "addCompany",
  };
  return response;
};

export const getCompaniesControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const user_id = args.user_id;
  const companies = await getCompanies(user_id);

  let response = {
    message: "getCompanies",
    companies: [] as any[],
  };

  if (companies) {
    response = {
      message: "getCompanies",
      companies: companies,
    };
  }

  return response;
};

export const getCompanyControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const id = args.id;
  const company = await getCompany(id);

  let response = {
    message: "getCompany",
    company: {},
  };

  if (company) {
    response = {
      message: "getCompany",
      company: company,
    };
  }

  return response;
};
