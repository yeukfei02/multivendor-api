import { objectType } from "nexus";
import { User } from "./user";

export const DeliveryAddress = objectType({
  name: "DeliveryAddress",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("address");
    t.nonNull.string("geo_code");
    t.string("last_used");
    t.nonNull.string("comment");
    t.nonNull.string("phone");
    t.nonNull.field("users", { type: User });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
