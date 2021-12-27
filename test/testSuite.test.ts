import { userTest } from "./user";
import { companyTest } from "./company";
import { codeTest } from "./code";
import { addressTest } from "./address";
// import { orderItemTest } from "./orderItem";
// import { orderTest } from "./order";
// import { brandTest } from "./brand";
// import { vendorTest } from "./vendor";

describe("multivendor api test", () => {
  userTest();
  companyTest();
  codeTest();
  addressTest();
  // orderItemTest();
  // orderTest();
  // brandTest();
  // vendorTest();
});
