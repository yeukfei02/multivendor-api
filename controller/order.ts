import dayjs from "dayjs";
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

export const repeatOrderControllerFunc = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (args && args.id) {
    const id = args.id;
    const order = await getOrder(id);
    if (order) {
      await addOrder(
        order.number,
        order.status,
        order.comment ? order.comment : "",
        order.address,
        order.delivery_at
          ? order.delivery_at.toLocaleDateString()
          : dayjs().format(),
        order.delivery_price ? order.delivery_price.toNumber() : 0,
        order.discount ? order.discount.toNumber() : 0,
        order.total ? order.total.toNumber() : 0,
        order.user_id,
        order.company_id,
        order.vendor_id
      );
    }
  }

  const response = {
    message: "repeatOrder",
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
