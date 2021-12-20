import { userTest } from "./user";
import { companyTest } from "./company";
import { codeTest } from "./code";

describe("multivendor api test", () => {
  userTest();
  companyTest();
  codeTest();
});
