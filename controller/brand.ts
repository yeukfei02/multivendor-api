import { getBrand } from "../services/brand";

export const getBrandControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const id = args.id;
  const brand = await getBrand(id);

  let response = {
    message: "getBrand",
    brand: {},
  };

  if (brand) {
    response = {
      message: "getBrand",
      brand: brand,
    };
  }

  return response;
};
