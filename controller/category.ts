import {
  getCategories,
  getCategory,
  getSubCategories,
} from "../services/category";

export const getCategoriesControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getCategories",
    categories: [] as any[],
  };

  const categories = await getCategories();

  if (categories) {
    response = {
      message: "getCategories",
      categories: categories,
    };
  }

  return response;
};

export const getCategoryControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getCategory",
    category: {},
  };

  if (args && args.id) {
    const id = args.id;
    const category = await getCategory(id);

    if (category) {
      response = {
        message: "getCategory",
        category: category,
      };
    }
  }

  return response;
};

export const getSubCategoriesControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getSubCategories",
    subCategories: [] as any[],
  };

  if (args && args.sub_id) {
    const sub_id = args.sub_id;
    const categories = await getSubCategories(sub_id);

    if (categories) {
      response = {
        message: "getSubCategories",
        subCategories: categories,
      };
    }
  }

  return response;
};
