import { inputObjectType } from "nexus";

export const CheckCodeInput = inputObjectType({
  name: "CheckCodeInput",
  definition(t) {
    t.nonNull.string("phone");
    t.nonNull.string("code");
  },
});
