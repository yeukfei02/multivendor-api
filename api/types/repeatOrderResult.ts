import { objectType } from "nexus";

export const RepeatOrderResult = objectType({
  name: "RepeatOrderResult",
  definition(t) {
    t.nonNull.string("message");
  },
});
