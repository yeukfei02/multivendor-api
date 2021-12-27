import { list, objectType } from "nexus";
import { Category } from "./category";

export const GetSubCategoriesResult = objectType({
  name: "GetSubCategoriesResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("subCategories", { type: list(Category) });
  },
});
