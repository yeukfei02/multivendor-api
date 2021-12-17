import { mutationField, stringArg, nonNull } from "nexus";
import { AddUserResult } from "../types/addUserResult";

import { addUserControllerFunc } from "../../controller/user";

export const addUser = mutationField("addUser", {
  type: nonNull(AddUserResult),
  args: { phone: nonNull(stringArg()) },
  resolve: addUserControllerFunc,
});
