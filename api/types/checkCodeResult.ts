import { objectType } from "nexus";
import { PhoneConfirmation } from "./phoneConfirmation";

export const CheckCodeResult = objectType({
  name: "CheckCodeResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("phoneConfirmation", { type: PhoneConfirmation });
  },
});
