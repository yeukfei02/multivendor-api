import { objectType } from "nexus";
import { Brand } from "./brand";

export const GetBrandResult = objectType({
  name: "GetBrandResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("brand", { type: Brand });
  },
});
