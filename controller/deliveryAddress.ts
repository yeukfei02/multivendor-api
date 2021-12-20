import {
  addDeliveryAddress,
  getDeliveryAddresses,
  getDeliveryAddress,
} from "../services/deliveryAddress";

export const addAddressControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (args && args.input) {
    const input = args.input;
    const { address, geo_code, comment, phone, user_id } = input;

    await addDeliveryAddress(address, geo_code, comment, phone, user_id);
  }

  const response = {
    message: "addDeliveryAddress",
  };
  return response;
};

export const getAddressesControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getDeliveryAddresses",
    deliveryAddresses: [] as any[],
  };

  if (args && args.user_id) {
    const user_id = args.user_id;

    const deliveryAddresses = await getDeliveryAddresses(user_id);

    if (deliveryAddresses) {
      response = {
        message: "getDeliveryAddresses",
        deliveryAddresses: deliveryAddresses,
      };
    }
  }

  return response;
};

export const getAddressControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const id = args.id;
  const deliveryAddress = await getDeliveryAddress(id);

  let response = {
    message: "getAddress",
    deliveryAddress: {},
  };

  if (deliveryAddress) {
    response = {
      message: "getAddress",
      deliveryAddress: deliveryAddress,
    };
  }

  return response;
};
