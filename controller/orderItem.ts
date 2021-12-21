import { getOrderItems } from "../services/orderItem";

export const getItemsControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  let response = {
    message: "getOrderItems",
    orderItems: [] as any[],
  };

  if (args && args.order_id) {
    const order_id = args.order_id;

    const orderItems = await getOrderItems(order_id);

    if (orderItems) {
      response = {
        message: "getOrderItems",
        orderItems: orderItems,
      };
    }
  }

  return response;
};
