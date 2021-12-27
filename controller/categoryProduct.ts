import {
  getCategoryProducts,
  getSubCategoryProducts,
} from "../services/categoryProduct";

export const getCategoryProductsControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getCategoryProducts",
    categoryProducts: [] as any[],
  };

  if (args && args.category_id) {
    const category_id = args.category_id;
    const categoryProducts = await getCategoryProducts(category_id);

    if (categoryProducts) {
      response = {
        message: "getCategoryProducts",
        categoryProducts: categoryProducts,
      };
    }
  }

  return response;
};

export const getSubCategoryProductsControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getSubCategoryProducts",
    subCategoryProducts: [] as any[],
  };

  if (args && args.sub_id) {
    const sub_id = args.sub_id;
    const subCategoryProducts = await getSubCategoryProducts(sub_id);

    if (subCategoryProducts) {
      response = {
        message: "getSubCategoryProducts",
        subCategoryProducts: subCategoryProducts,
      };
    }
  }

  return response;
};
