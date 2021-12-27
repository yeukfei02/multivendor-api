import { list, objectType } from "nexus";
import { Brand } from "./brand";
import { CategoryProduct } from "./categoryProduct";
import { OrderItem } from "./orderItem";
import { VendorProduct } from "./vendorProduct";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("phone");
    t.nonNull.boolean("phone_confirmed");
    t.string("type");
    t.field("brand", { type: Brand });
    t.field("order_items", { type: list(OrderItem) });
    t.field("category_products", { type: list(CategoryProduct) });
    t.field("vendor_products", { type: list(VendorProduct) });
    t.nonNull.boolean("allow_order");
    t.nonNull.boolean("is_active");
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
