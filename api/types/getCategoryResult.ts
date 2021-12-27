import { objectType } from "nexus";
import { Category } from "./category";

export const GetCategoryResult = objectType({
  name: "GetCategoryResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("category", { type: Category });
  },
});
