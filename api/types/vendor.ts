import { list, objectType } from "nexus";
import { Order } from "./order";
import { VendorProduct } from "./vendorProduct";

export const Vendor = objectType({
  name: "Vendor",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.string("slug");
    t.nonNull.string("payment");
    t.nonNull.string("delivery");
    t.nonNull.string("description");
    t.nonNull.int("working_hours");
    t.nonNull.int("rating");
    t.field("orders", { type: list(Order) });
    t.field("vendor_products", { type: list(VendorProduct) });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
