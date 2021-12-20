import { objectType } from "nexus";

export const AddAddressResult = objectType({
  name: "AddAddressResult",
  definition(t) {
    t.nonNull.string("message");
  },
});
