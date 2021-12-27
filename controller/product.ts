import { getProduct, getBrandProducts } from "../services/product";

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
