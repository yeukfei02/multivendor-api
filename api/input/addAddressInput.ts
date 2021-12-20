import { inputObjectType } from "nexus";

export const AddAddressInput = inputObjectType({
  name: "AddAddressInput",
  definition(t) {
    t.nonNull.string("address");
    t.nonNull.string("geo_code");
    t.nonNull.string("comment");
    t.nonNull.string("phone");
    t.nonNull.string("user_id");
  },
});
