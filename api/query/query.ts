import { queryField, nonNull, stringArg } from "nexus";
import { GetUserResult } from "../types/getUserResult";
import { GetCompaniesResult } from "../types/getCompaniesResult";
import { GetCompanyResult } from "../types/getCompanyResult";
import { CheckCodeResult } from "../types/checkCodeResult";
import { GetAddressesResult } from "../types/getAddressesResult";
import { GetAddressResult } from "../types/getAddressResult";
import { GetItemsResult } from "../types/getItemsResult";
import { GetOrdersResult } from "../types/getOrdersResult";
import { GetOrderResult } from "../types/getOrderResult";
import { GetBrandResult } from "../types/getBrandResult";
import { GetVendorResult } from "../types/getVendorResult";
import { GetProductVendorsResult } from "../types/getProductVendorsResult";
import { GetVendorProductsResult } from "../types/getVendorProductsResult";
import { GetCategoriesResult } from "../types/getCategoriesResult";
import { GetCategoryResult } from "../types/getCategoryResult";
import { GetSubCategoriesResult } from "../types/getSubCategoriesResult";
import { GetCategoryProductsResult } from "../types/getCategoryProductsResult";
import { GetSubCategoryProductsResult } from "../types/getSubCategoryProductsResult";

import { CheckCodeInput } from "../input/checkCodeInput";
import { ProductVendorsInput } from "../input/productVendorsInput";
import { VendorProductsInput } from "../input/vendorProductsInput";

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
import {
  getOrdersControllerFunc,
  getOrderControllerFunc,
} from "../../controller/order";
import { getBrandControllerFunc } from "../../controller/brand";
import { getVendorControllerFunc } from "../../controller/vendor";
import {
  getProductVendorsControllerFunc,
  getVendorProductsControllerFunc,
} from "../../controller/vendorProduct";
import {
  getCategoriesControllerFunc,
  getCategoryControllerFunc,
  getSubCategoriesControllerFunc,
} from "../../controller/category";
import {
  getCategoryProductsControllerFunc,
  getSubCategoryProductsControllerFunc,
} from "../../controller/categoryProduct";

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

export const getOrders = queryField("getOrders", {
  type: nonNull(GetOrdersResult),
  args: { user_id: nonNull(stringArg()) },
  resolve: getOrdersControllerFunc,
});

export const getOrder = queryField("getOrder", {
  type: nonNull(GetOrderResult),
  args: { id: nonNull(stringArg()) },
  resolve: getOrderControllerFunc,
});

export const getBrand = queryField("getBrand", {
  type: nonNull(GetBrandResult),
  args: { id: nonNull(stringArg()) },
  resolve: getBrandControllerFunc,
});

export const getVendor = queryField("getVendor", {
  type: nonNull(GetVendorResult),
  args: { id: nonNull(stringArg()) },
  resolve: getVendorControllerFunc,
});

export const getProductVendors = queryField("getProductVendors", {
  type: nonNull(GetProductVendorsResult),
  args: { input: nonNull(ProductVendorsInput) },
  resolve: getProductVendorsControllerFunc,
});

export const getVendorProducts = queryField("getVendorProducts", {
  type: nonNull(GetVendorProductsResult),
  args: { input: nonNull(VendorProductsInput) },
  resolve: getVendorProductsControllerFunc,
});

export const getCategories = queryField("getCategories", {
  type: nonNull(GetCategoriesResult),
  args: {},
  resolve: getCategoriesControllerFunc,
});

export const getCategory = queryField("getCategory", {
  type: nonNull(GetCategoryResult),
  args: { id: nonNull(stringArg()) },
  resolve: getCategoryControllerFunc,
});

export const getSubCategories = queryField("getSubCategories", {
  type: nonNull(GetSubCategoriesResult),
  args: { sub_id: nonNull(stringArg()) },
  resolve: getSubCategoriesControllerFunc,
});

export const getCategoryProducts = queryField("getCategoryProducts", {
  type: nonNull(GetCategoryProductsResult),
  args: { category_id: nonNull(stringArg()) },
  resolve: getCategoryProductsControllerFunc,
});

export const getSubCategoryProducts = queryField("getSubCategoryProducts", {
  type: nonNull(GetSubCategoryProductsResult),
  args: { sub_id: nonNull(stringArg()) },
  resolve: getSubCategoryProductsControllerFunc,
});
