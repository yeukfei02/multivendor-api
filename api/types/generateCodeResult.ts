import { objectType } from "nexus";

export const GenerateCodeResult = objectType({
  name: "GenerateCodeResult",
  definition(t) {
    t.nonNull.string("message");
    t.nonNull.string("code");
  },
});
