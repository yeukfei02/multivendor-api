import { list, objectType } from "nexus";
import { Product } from "./product";

export const GetProductCategoriesResult = objectType({
  name: "GetProductCategoriesResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("productCategories", { type: list(Product) });
  },
});
