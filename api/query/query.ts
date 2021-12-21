import { queryField, nonNull, stringArg } from "nexus";
import { GetUserResult } from "../types/getUserResult";
import { GetCompaniesResult } from "../types/getCompaniesResult";
import { GetCompanyResult } from "../types/getCompanyResult";
import { CheckCodeResult } from "../types/checkCodeResult";
import { GetAddressesResult } from "../types/getAddressesResult";
import { GetAddressResult } from "../types/getAddressResult";
import { GetItemsResult } from "../types/getItemsResult";

import { CheckCodeInput } from "../input/checkCodeInput";

import { getUserControllerFunc } from "../../controller/user";
import {
  getCompaniesControllerFunc,
  getCompanyControllerFunc,
} from "../../controller/company";
import { checkCodeControllerFunc } from "../../controller/phoneConfirmation";
import {
  getAddressesControllerFunc,
  getAddressControllerFunc,
} from "../../controller/deliveryAddress";
import { getItemsControllerFunc } from "../../controller/orderItem";

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

export const checkCode = queryField("checkCode", {
  type: nonNull(CheckCodeResult),
  args: { input: nonNull(CheckCodeInput) },
  resolve: checkCodeControllerFunc,
});

export const getAddresses = queryField("getAddresses", {
  type: nonNull(GetAddressesResult),
  args: { user_id: nonNull(stringArg()) },
  resolve: getAddressesControllerFunc,
});

export const getAddress = queryField("getAddress", {
  type: nonNull(GetAddressResult),
  args: { id: nonNull(stringArg()) },
  resolve: getAddressControllerFunc,
});

export const getItems = queryField("getItems", {
  type: nonNull(GetItemsResult),
  args: { order_id: nonNull(stringArg()) },
  resolve: getItemsControllerFunc,
});
