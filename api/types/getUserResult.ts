import { objectType } from "nexus";
import { User } from "./user";

export const GetUserResult = objectType({
  name: "GetUserResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("user", { type: User });
  },
});
