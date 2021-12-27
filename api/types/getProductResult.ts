import { objectType } from "nexus";
import { Product } from "./product";

export const GetProductResult = objectType({
  name: "GetProductResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("product", { type: Product });
  },
});
