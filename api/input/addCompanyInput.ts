import { inputObjectType } from "nexus";

export const AddCompanyInput = inputObjectType({
  name: "AddCompanyInput",
  definition(t) {
    t.nonNull.string("code");
    t.nonNull.string("name");
    t.nonNull.string("address");
    t.nonNull.string("user_id");
  },
});
