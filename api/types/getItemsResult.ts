import { list, objectType } from "nexus";
import { OrderItem } from "./orderItem";

export const GetItemsResult = objectType({
  name: "GetItemsResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("orderItems", { type: list(OrderItem) });
  },
});
