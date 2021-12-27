import { list, objectType } from "nexus";
import { CategoryProduct } from "./categoryProduct";

export const GetSubCategoryProductsResult = objectType({
  name: "GetSubCategoryProductsResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("subCategoryProducts", { type: list(CategoryProduct) });
  },
});
