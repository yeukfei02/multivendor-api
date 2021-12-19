import { list, objectType } from "nexus";
import { Company } from "./company";

export const GetCompaniesResult = objectType({
  name: "GetCompaniesResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("companies", { type: list(Company) });
  },
});
