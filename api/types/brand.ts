import { list, objectType } from "nexus";
import { Product } from "./product";

export const Brand = objectType({
  name: "Brand",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.string("slug");
    t.nonNull.boolean("is_active");
    t.field("products", { type: list(Product) });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
