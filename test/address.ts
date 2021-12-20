import { GraphQLClient, gql } from "graphql-request";
import faker from "faker";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

const phone = "99998888";

let addressId = "";

export const addressTest = () => {
  describe("address test", () => {
    test("addCompany", async () => {
      const ADD_ADDRESS = gql`
        mutation addAddress($input: AddAddressInput!) {
          addAddress(input: $input) {
            message
          }
        }
      `;
      const user_id = await getUserId();
      const variables = {
        input: {
          address: faker.address.streetAddress(),
          comment: faker.lorem.words(),
          geo_code: faker.address.zipCode(),
          phone: faker.phone.phoneNumberFormat(),
          user_id: user_id,
        },
      };
      const response = await graphQLClient.request(ADD_ADDRESS, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.addAddress).toBeDefined();
      expect(response.addAddress.message).toBeDefined();
    });

    test("getAddresses", async () => {
      const GET_ADDRESSES = gql`
        query getAddresses($user_id: String!) {
          getAddresses(user_id: $user_id) {
            deliveryAddresses {
              address
              comment
              created_at
              geo_code
              id
              last_used
              phone
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
            message
          }
        }
      `;
      const user_id = await getUserId();
      const variables = {
        user_id: user_id,
      };
      const response = await graphQLClient.request(GET_ADDRESSES, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getAddresses).toBeDefined();
      expect(response.getAddresses.message).toBeDefined();
      expect(response.getAddresses.deliveryAddresses).toBeDefined();

      addressId = response.getAddresses.deliveryAddresses[0].id;
    });

    test("getAddress", async () => {
      const GET_ADDRESS = gql`
        query getAddress($id: String!) {
          getAddress(id: $id) {
            deliveryAddress {
              address
              comment
              created_at
              geo_code
              id
              last_used
              phone
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
            message
          }
        }
      `;
      const variables = {
        id: addressId,
      };
      const response = await graphQLClient.request(GET_ADDRESS, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getAddress).toBeDefined();
      expect(response.getAddress.message).toBeDefined();
      expect(response.getAddress.deliveryAddress).toBeDefined();
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
