import { GraphQLClient, gql } from "graphql-request";
import faker from "faker";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

const phone = faker.phone.phoneNumberFormat();

export const userTest = () => {
  describe("user test", () => {
    test("addUser", async () => {
      const ADD_USER = gql`
        mutation addUser($phone: String!) {
          addUser(phone: $phone) {
            message
          }
        }
      `;
      const variables = {
        phone: phone,
      };
      const response = await graphQLClient.request(ADD_USER, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.addUser).toBeDefined();
      expect(response.addUser.message).toBeDefined();
    });

    test("getUser", async () => {
      const GET_USER = gql`
        query getUser($phone: String!) {
          getUser(phone: $phone) {
            message
            user {
              allow_order
              created_at
              id
              is_active
              phone
              phone_confirmed
              updated_at
            }
          }
        }
      `;
      const variables = {
        phone: phone,
      };
      const response = await graphQLClient.request(GET_USER, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getUser).toBeDefined();
      expect(response.getUser.message).toBeDefined();
      expect(response.getUser.user).toBeDefined();
    });
  });
};
