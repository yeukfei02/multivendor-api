import {
  getProductVendors,
  getVendorProducts,
} from "../services/vendorProduct";

export const getProductVendorsControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getProductVendors",
    productVendors: [] as any[],
  };

  if (args && args.input) {
    const { product_id, vendor_id } = args.input;
    const productVendors = await getProductVendors(product_id, vendor_id);

    if (productVendors) {
      response = {
        message: "getProductVendors",
        productVendors: productVendors,
      };
    }
  }

  return response;
};

export const getVendorProductsControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getVendorProducts",
    vendorProducts: [] as any[],
  };

  if (args && args.input) {
    const { vendor_id, sub_id, category_id } = args.input;
    const vendorProducts = await getVendorProducts(
      vendor_id,
      sub_id,
      category_id
    );

    if (vendorProducts) {
      response = {
        message: "getVendorProducts",
        vendorProducts: vendorProducts,
      };
    }
  }

  return response;
};
