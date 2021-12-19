import { objectType } from "nexus";
import { Company } from "./company";

export const GetCompanyResult = objectType({
  name: "GetCompanyResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("company", { type: Company });
  },
});
