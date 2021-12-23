import { list, objectType } from "nexus";
import { Order } from "./order";

export const GetOrdersResult = objectType({
  name: "GetOrdersResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("orders", { type: list(Order) });
  },
});
