import { objectType } from "nexus";
import { Order } from "./order";
import { Product } from "./product";

export const OrderItem = objectType({
  name: "OrderItem",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.float("price");
    t.nonNull.int("count");
    t.nonNull.field("order", { type: Order });
    t.nonNull.field("product", { type: Product });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
