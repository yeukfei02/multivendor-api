import { list, objectType } from "nexus";
import { Category } from "./category";

export const GetCategoriesResult = objectType({
  name: "GetCategoriesResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("categories", { type: list(Category) });
  },
});
