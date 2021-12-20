import { list, objectType } from "nexus";
import { DeliveryAddress } from "./deliveryAddress";

export const GetAddressesResult = objectType({
  name: "GetAddressesResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("deliveryAddresses", { type: list(DeliveryAddress) });
  },
});
