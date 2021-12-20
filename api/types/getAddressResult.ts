import { objectType } from "nexus";
import { DeliveryAddress } from "./deliveryAddress";

export const GetAddressResult = objectType({
  name: "GetAddressResult",
  definition(t) {
    t.nonNull.string("message");
    t.field("deliveryAddress", { type: DeliveryAddress });
  },
});
