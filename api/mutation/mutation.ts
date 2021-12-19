import { mutationField, stringArg, nonNull } from "nexus";
import { AddUserResult } from "../types/addUserResult";
import { AddCompanyResult } from "../types/addCompanyResult";
import { GenerateCodeResult } from "../types/generateCodeResult";

import { AddCompanyInput } from "../input/addCompanyInput";

import { addUserControllerFunc } from "../../controller/user";
import { addCompanyControllerFunc } from "../../controller/company";
import { generateCodeControllerFunc } from "../../controller/phoneConfirmation";

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

export const generateCode = mutationField("generateCode", {
  type: nonNull(GenerateCodeResult),
  args: { phone: nonNull(stringArg()) },
  resolve: generateCodeControllerFunc,
});
