import { inputObjectType } from "nexus";

export const VendorProductsInput = inputObjectType({
  name: "VendorProductsInput",
  definition(t) {
    t.nonNull.string("vendor_id");
    t.nonNull.string("sub_id");
    t.nonNull.string("category_id");
  },
});
