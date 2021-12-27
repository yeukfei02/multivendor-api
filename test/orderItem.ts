import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

export const orderItemTest = () => {
  describe("orderItem test", () => {
    test("getItems", async () => {
      const GET_ITEMS = gql`
        query getItems($order_id: String!) {
          getItems(order_id: $order_id) {
            message
            orderItems {
              count
              created_at
              id
              order {
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
              updated_at
            }
          }
        }
      `;
      const variables = {
        order_id: "",
      };
      const response = await graphQLClient.request(GET_ITEMS, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getOrderItems).toBeDefined();
      expect(response.getOrderItems.message).toBeDefined();
      expect(response.getOrderItems.orderItems).toBeDefined();
    });
  });
};
