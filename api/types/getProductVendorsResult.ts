import { list, objectType } from "nexus";
import { VendorProduct } from "./vendorProduct";

export const GetProductVendorsResult = objectType({
  name: "GetProductVendorsResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("productVendors", { type: list(VendorProduct) });
  },
});
