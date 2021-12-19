import { objectType } from "nexus";

export const AddCompanyResult = objectType({
  name: "AddCompanyResult",
  definition(t) {
    t.nonNull.string("message");
  },
});
