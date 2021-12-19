import { queryField, nonNull, stringArg } from "nexus";
import { GetUserResult } from "../types/getUserResult";
import { GetCompaniesResult } from "../types/getCompaniesResult";
import { GetCompanyResult } from "../types/getCompanyResult";

import { getUserControllerFunc } from "../../controller/user";
import {
  getCompaniesControllerFunc,
  getCompanyControllerFunc,
} from "../../controller/company";

export const getUser = queryField("getUser", {
  type: nonNull(GetUserResult),
  args: { phone: nonNull(stringArg()) },
  resolve: getUserControllerFunc,
});

export const getCompanies = queryField("getCompanies", {
  type: nonNull(GetCompaniesResult),
  args: { user_id: nonNull(stringArg()) },
  resolve: getCompaniesControllerFunc,
});

export const getCompany = queryField("getCompany", {
  type: nonNull(GetCompanyResult),
  args: { id: nonNull(stringArg()) },
  resolve: getCompanyControllerFunc,
});
