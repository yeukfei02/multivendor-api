import { objectType } from "nexus";
import { Order } from "./order";

export const GetOrderResult = objectType({
  name: "GetOrderResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("order", { type: Order });
  },
});
