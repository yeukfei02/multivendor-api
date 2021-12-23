import { addOrder, getOrders, getOrder } from "../services/order";

export const addOrderControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (args && args.input) {
    const input = args.input;
    const {
      number,
      status,
      comment,
      address,
      delivery_at,
      delivery_price,
      discount,
      total,
      user_id,
      company_id,
      vendor_id,
    } = input;

    await addOrder(
      number,
      status,
      comment,
      address,
      delivery_at,
      delivery_price,
      discount,
      total,
      user_id,
      company_id,
      vendor_id
    );
  }

  const response = {
    message: "addOrder",
  };
  return response;
};

export const getOrdersControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const user_id = args.user_id;
  const orders = await getOrders(user_id);

  let response = {
    message: "getOrders",
    orders: [] as any[],
  };

  if (orders) {
    response = {
      message: "getOrders",
      orders: orders,
    };
  }

  return response;
};

export const getOrderControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  const id = args.id;
  const order = await getOrder(id);

  let response = {
    message: "getOrder",
    order: {},
  };

  if (order) {
    response = {
      message: "getOrder",
      order: order,
    };
  }

  return response;
};
