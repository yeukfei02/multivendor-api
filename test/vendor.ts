import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

export const vendorTest = () => {
  describe("vendor test", () => {
    test("getVendor", async () => {
      const GET_VENDOR = gql`
        query getVendor($id: String!) {
          getVendor(id: $id) {
            message
            vendor {
              created_at
              delivery
              description
              id
              name
              orders {
                address
                comment
                created_at
                deliver_at
                delivery_price
                discount
                id
                number
                status
                total
                updated_at
                users {
                  allow_order
                  created_at
                  id
                  is_active
                  phone
                  phone_confirmed
                  updated_at
                }
              }
              payment
              rating
              slug
              updated_at
              vendor_products {
                created_at
                id
                min_count
                price
                product {
                  allow_order
                  created_at
                  id
                  is_active
                  phone
                  phone_confirmed
                  type
                  updated_at
                }
                unit
                updated_at
                vendor {
                  created_at
                  delivery
                  description
                  id
                  name
                  orders {
                    address
                    comment
                    created_at
                    deliver_at
                    delivery_price
                    discount
                    id
                    number
                    status
                    total
                    updated_at
                  }
                  payment
                  rating
                  slug
                  updated_at
                  working_hours
                }
              }
              working_hours
            }
          }
        }
      `;
      const variables = {
        id: "",
      };
      const response = await graphQLClient.request(GET_VENDOR, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getVendor).toBeDefined();
      expect(response.getVendor.message).toBeDefined();
      expect(response.getVendor.vendor).toBeDefined();
    });
  });
};
