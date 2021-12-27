import {
  getProductCategories,
  getProductSubCategories,
  getProduct,
  getBrandProducts,
} from "../services/product";

export const getProductCategoriesControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getProductCategories",
    productCategories: [] as any[],
  };

  const category_id = args.category_id;
  const productCategories = await getProductCategories(category_id);

  if (productCategories) {
    response = {
      message: "getProductCategories",
      productCategories: productCategories,
    };
  }

  return response;
};

export const getProductSubCategoriesControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getProductSubCategories",
    productSubCategories: [] as any[],
  };

  const sub_id = args.sub_id;
  const productSubCategories = await getProductSubCategories(sub_id);

  if (productSubCategories) {
    response = {
      message: "getProductSubCategories",
      productSubCategories: productSubCategories,
    };
  }

  return response;
};

export const getProductControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getProduct",
    product: {},
  };

  const id = args.id;
  const product = await getProduct(id);

  if (product) {
    response = {
      message: "getProduct",
      product: product,
    };
  }

  return response;
};

export const getBrandProductsControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getBrandProducts",
    brandProducts: [] as any[],
  };

  if (args && args.brand_id) {
    const brand_id = args.brand_id;
    const brandProducts = await getBrandProducts(brand_id);

    response = {
      message: "getBrandProducts",
      brandProducts: brandProducts,
    };
  }

  return response;
};
