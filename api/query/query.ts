import { queryField, nonNull, stringArg } from "nexus";
import { GetUserResult } from "../types/getUserResult";

import { getUserControllerFunc } from "../../controller/user";

export const getUser = queryField("getUser", {
  type: nonNull(GetUserResult),
  args: { phone: nonNull(stringArg()) },
  resolve: getUserControllerFunc,
});
