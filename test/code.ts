import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

const phone = "99998888";

let code = "";

export const codeTest = () => {
  describe("code test", () => {
    test("generateCode", async () => {
      const GENERATE_CODE = gql`
        mutation generateCode($phone: String!) {
          generateCode(phone: $phone) {
            code
            message
          }
        }
      `;
      const variables = {
        phone: phone,
      };
      const response = await graphQLClient.request(GENERATE_CODE, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.generateCode).toBeDefined();
      expect(response.generateCode.message).toBeDefined();
      expect(response.generateCode.code).toBeDefined();

      code = response.generateCode.code;
    });

    test("checkCode", async () => {
      const CHECK_CODE = gql`
        query checkCode($input: CheckCodeInput!) {
          checkCode(input: $input) {
            message
            phoneConfirmation {
              code
              created_at
              id
              ip
              phone
              updated_at
              used_at
            }
          }
        }
      `;
      const variables = {
        input: {
          phone: phone,
          code: code,
        },
      };
      const response = await graphQLClient.request(CHECK_CODE, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.checkCode).toBeDefined();
      expect(response.checkCode.message).toBeDefined();
      expect(response.checkCode.phoneConfirmation).toBeDefined();
    });
  });
};
