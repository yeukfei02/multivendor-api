import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

export const brandTest = () => {
  describe("brand test", () => {
    test("getBrand", async () => {
      const GET_BRAND = gql`
        query getBrand($id: String!) {
          getBrand(id: $id) {
            brand {
              created_at
              id
              is_active
              name
              products {
                allow_order
                created_at
                id
                is_active
                phone
                phone_confirmed
                type
                updated_at
              }
              slug
              updated_at
            }
            message
          }
        }
      `;
      const variables = {
        id: "",
      };
      const response = await graphQLClient.request(GET_BRAND, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getBrand).toBeDefined();
      expect(response.getBrand.message).toBeDefined();
      expect(response.getBrand.brand).toBeDefined();
    });
  });
};
