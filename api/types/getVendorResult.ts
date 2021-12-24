import { objectType } from "nexus";
import { Vendor } from "./vendor";

export const GetVendorResult = objectType({
  name: "GetVendorResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("vendor", { type: Vendor });
  },
});
