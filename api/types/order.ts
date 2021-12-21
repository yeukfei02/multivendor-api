import { objectType } from "nexus";
import { User } from "./user";

export const Order = objectType({
  name: "Order",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.float("number");
    t.nonNull.string("status");
    t.string("comment");
    t.nonNull.string("address");
    t.string("deliver_at");
    t.float("delivery_price");
    t.float("discount");
    t.float("total");
    t.nonNull.field("users", { type: User });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
