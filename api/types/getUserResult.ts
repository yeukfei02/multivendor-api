import { objectType } from "nexus";
import { Users } from "./users";

export const GetUserResult = objectType({
  name: "GetUserResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("users", { type: Users });
  },
});
