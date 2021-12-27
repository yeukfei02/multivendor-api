import { GraphQLClient, gql } from "graphql-request";
import faker from "faker";
import dayjs from "dayjs";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

const phone = "99998888";

let orderId = "";

export const orderTest = () => {
  describe("order test", () => {
    test("addOrder", async () => {
      const ADD_ORDER = gql`
        mutation addOrder($input: AddOrderInput!) {
          addOrder(input: $input) {
            message
          }
        }
      `;
      const user_id = await getUserId();
      const variables = {
        input: {
          address: faker.address.streetAddress(),
          comment: faker.lorem.words(),
          company_id: "",
          delivery_at: dayjs().format(),
          delivery_price: faker.datatype.float(),
          discount: faker.datatype.float(),
          number: faker.datatype.number(),
          status: faker.lorem.words(),
          total: faker.datatype.float(),
          user_id: user_id,
          vendor_id: "",
        },
      };
      const response = await graphQLClient.request(ADD_ORDER, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.addOrder).toBeDefined();
      expect(response.addOrder.message).toBeDefined();
    });

    test("getOrders", async () => {
      const GET_ORDERS = gql`
        query getOrders($user_id: String!) {
          getOrders(user_id: $user_id) {
            message
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
          }
        }
      `;
      const user_id = await getUserId();
      const variables = {
        user_id: user_id,
      };
      const response = await graphQLClient.request(GET_ORDERS, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getOrders).toBeDefined();
      expect(response.getOrders.message).toBeDefined();
      expect(response.getOrders.orders).toBeDefined();

      orderId = response.getOrders.orders[0].id;
    });

    test("getOrder", async () => {
      const GET_ORDER = gql`
        query getOrder($id: String!) {
          getOrder(id: $id) {
            message
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
          }
        }
      `;
      const variables = {
        id: orderId,
      };
      const response = await graphQLClient.request(GET_ORDER, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getOrder).toBeDefined();
      expect(response.getOrder.message).toBeDefined();
      expect(response.getOrder.order).toBeDefined();
    });
  });
};

async function getUserId() {
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

  const userId = response.getUser.user.id;
  return userId;
}
