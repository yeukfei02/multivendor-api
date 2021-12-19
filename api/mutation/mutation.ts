import { mutationField, stringArg, nonNull } from "nexus";
import { AddUserResult } from "../types/addUserResult";
import { AddCompanyResult } from "../types/addCompanyResult";

import { AddCompanyInput } from "../input/addCompanyInput";

import { addUserControllerFunc } from "../../controller/user";
import { addCompanyControllerFunc } from "../../controller/company";

export const addUser = mutationField("addUser", {
  type: nonNull(AddUserResult),
  args: { phone: nonNull(stringArg()) },
  resolve: addUserControllerFunc,
});

export const addCompany = mutationField("addCompany", {
  type: nonNull(AddCompanyResult),
  args: { input: nonNull(AddCompanyInput) },
  resolve: addCompanyControllerFunc,
});
