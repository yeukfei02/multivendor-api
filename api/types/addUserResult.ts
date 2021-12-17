import { objectType } from "nexus";

export const AddUserResult = objectType({
  name: "AddUserResult",
  definition(t) {
    t.nonNull.string("message");
  },
});
