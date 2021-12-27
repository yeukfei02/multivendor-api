import { list, objectType } from "nexus";
import { CategoryProduct } from "./categoryProduct";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("sub_id");
    t.nonNull.string("name");
    t.string("slug");
    t.string("icon");
    t.int("priority");
    t.nonNull.boolean("is_active");
    t.field("categoryProducts", { type: list(CategoryProduct) });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
