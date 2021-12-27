import { inputObjectType } from "nexus";

export const ProductVendorsInput = inputObjectType({
  name: "ProductVendorsInput",
  definition(t) {
    t.nonNull.string("product_id");
    t.nonNull.string("vendor_id");
  },
});
