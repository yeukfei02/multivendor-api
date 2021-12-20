import { GraphQLClient, gql } from "graphql-request";
import faker from "faker";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

const phone = "99998888";

let companyId = "";

export const companyTest = () => {
  describe("company test", () => {
    test("addCompany", async () => {
      const ADD_COMPANY = gql`
        mutation addCompany($input: AddCompanyInput!) {
          addCompany(input: $input) {
            message
          }
        }
      `;
      const user_id = await getUserId();
      const variables = {
        input: {
          address: faker.address.streetAddress(),
          code: faker.lorem.words(),
          name: faker.name.findName(),
          user_id: user_id,
        },
      };
      const response = await graphQLClient.request(ADD_COMPANY, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.addCompany).toBeDefined();
      expect(response.addCompany.message).toBeDefined();
    });

    test("getCompanies", async () => {
      const GET_COMPANIES = gql`
        query getCompanies($user_id: String!) {
          getCompanies(user_id: $user_id) {
            companies {
              address
              code
              created_at
              id
              name
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
      const response = await graphQLClient.request(GET_COMPANIES, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getCompanies).toBeDefined();
      expect(response.getCompanies.message).toBeDefined();
      expect(response.getCompanies.companies).toBeDefined();

      companyId = response.getCompanies.companies[0].id;
    });

    test("getCompany", async () => {
      const GET_COMPANY = gql`
        query getCompany($id: String!) {
          getCompany(id: $id) {
            company {
              address
              code
              created_at
              id
              name
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
        id: companyId,
      };
      const response = await graphQLClient.request(GET_COMPANY, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getCompany).toBeDefined();
      expect(response.getCompany.message).toBeDefined();
      expect(response.getCompany.company).toBeDefined();
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
