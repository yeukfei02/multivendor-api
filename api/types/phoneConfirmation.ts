import { objectType } from "nexus";

export const PhoneConfirmation = objectType({
  name: "PhoneConfirmation",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("phone");
    t.nonNull.string("code");
    t.nonNull.string("ip");
    t.string("used_at");
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});
