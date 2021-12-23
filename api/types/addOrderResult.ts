import { objectType } from "nexus";

export const AddOrderResult = objectType({
  name: "AddOrderResult",
  definition(t) {
    t.nonNull.string("message");
  },
});
