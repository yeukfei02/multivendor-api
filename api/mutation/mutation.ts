import { mutationField, stringArg, nonNull } from "nexus";
import { AddUserResult } from "../types/addUserResult";
import { AddCompanyResult } from "../types/addCompanyResult";
import { GenerateCodeResult } from "../types/generateCodeResult";
import { AddAddressResult } from "../types/addAddressResult";
import { AddOrderResult } from "../types/addOrderResult";
import { RepeatOrderResult } from "../types/repeatOrderResult";

import { AddCompanyInput } from "../input/addCompanyInput";
import { AddAddressInput } from "../input/addAddressInput";
import { AddOrderInput } from "../input/addOrderInput";

import { addUserControllerFunc } from "../../controller/user";
import { addCompanyControllerFunc } from "../../controller/company";
import { generateCodeControllerFunc } from "../../controller/phoneConfirmation";
import { addAddressControllerFunc } from "../../controller/deliveryAddress";
import {
  addOrderControllerFunc,
  repeatOrderControllerFunc,
} from "../../controller/order";

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

export const addAddress = mutationField("addAddress", {
  type: nonNull(AddAddressResult),
  args: { input: nonNull(AddAddressInput) },
  resolve: addAddressControllerFunc,
});

export const addOrder = mutationField("addOrder", {
  type: nonNull(AddOrderResult),
  args: { input: nonNull(AddOrderInput) },
  resolve: addOrderControllerFunc,
});

export const repeatOrder = mutationField("repeatOrder", {
  type: nonNull(RepeatOrderResult),
  args: { id: nonNull(stringArg()) },
  resolve: repeatOrderControllerFunc,
});
