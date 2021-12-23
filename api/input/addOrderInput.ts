import { inputObjectType } from "nexus";

export const AddOrderInput = inputObjectType({
  name: "AddOrderInput",
  definition(t) {
    t.nonNull.int("number");
    t.nonNull.string("status");
    t.string("comment");
    t.nonNull.string("address");
    t.string("delivery_at");
    t.float("delivery_price");
    t.float("discount");
    t.float("total");
    t.nonNull.string("user_id");
    t.nonNull.string("company_id");
    t.nonNull.string("vendor_id");
  },
});
