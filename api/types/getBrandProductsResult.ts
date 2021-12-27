import { list, objectType } from "nexus";
import { Product } from "./product";

export const GetBrandProductsResult = objectType({
  name: "GetBrandProductsResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("brandProducts", { type: list(Product) });
  },
});
