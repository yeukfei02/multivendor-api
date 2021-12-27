import { list, objectType } from "nexus";
import { VendorProduct } from "./vendorProduct";

export const GetVendorProductsResult = objectType({
  name: "GetVendorProductsResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("vendorProducts", { type: list(VendorProduct) });
  },
});
