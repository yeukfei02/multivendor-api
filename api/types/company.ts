import { objectType } from "nexus";
import { User } from "./user";

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("code");
    t.nonNull.string("name");
    t.nonNull.string("address");
    t.nonNull.field("users", { type: User });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
