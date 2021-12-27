import { list, objectType } from "nexus";
import { CategoryProduct } from "./categoryProduct";

export const GetCategoryProductsResult = objectType({
  name: "GetCategoryProductsResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("categoryProducts", { type: list(CategoryProduct) });
  },
});
