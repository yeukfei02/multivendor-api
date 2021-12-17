import { objectType } from "nexus";

export const Users = objectType({
  name: "Users",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("phone");
    t.nonNull.boolean("phone_confirmed");
    t.nonNull.boolean("allow_order");
    t.nonNull.boolean("is_active");
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
