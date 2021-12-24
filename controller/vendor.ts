import { getVendor } from "../services/vendor";

export const getVendorControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const id = args.id;
  const vendor = await getVendor(id);

  let response = {
    message: "getVendor",
    vendor: {},
  };

  if (vendor) {
    response = {
      message: "getVendor",
      vendor: vendor,
    };
  }

  return response;
};
