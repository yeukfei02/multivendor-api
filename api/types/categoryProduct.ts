import { list, objectType } from "nexus";
import { Category } from "./category";
import { Product } from "./product";

export const CategoryProduct = objectType({
  name: "CategoryProduct",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("sub_id");
    t.nonNull.boolean("is_active");
    t.field("categories", { type: list(Category) });
    t.field("products", { type: list(Product) });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
