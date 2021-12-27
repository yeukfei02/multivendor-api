import { list, objectType } from "nexus";
import { Product } from "./product";

export const GetProductSubCategoriesResult = objectType({
  name: "GetProductSubCategoriesResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("productSubCategories", { type: list(Product) });
  },
});
