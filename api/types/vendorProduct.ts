import { objectType } from "nexus";
import { Vendor } from "./vendor";
import { Product } from "./product";

export const VendorProduct = objectType({
  name: "VendorProduct",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.float("price");
    t.nonNull.int("min_count");
    t.nonNull.int("unit");
    t.field("vendor", { type: Vendor });
    t.field("product", { type: Product });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
