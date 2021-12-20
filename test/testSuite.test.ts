import { userTest } from "./user";
import { companyTest } from "./company";
import { codeTest } from "./code";
import { addressTest } from "./address";

describe("multivendor api test", () => {
  userTest();
  companyTest();
  codeTest();
  addressTest();
});
