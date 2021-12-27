import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

export const categoryTest = () => {
  describe("category test", () => {
    test("getCategories", async () => {
      const GET_CATEGORIES = gql`
        query getCategories {
          getCategories {
            categories {
              categoryProducts {
                categories {
                  created_at
                  icon
                  id
                  is_active
                  name
                  priority
                  slug
                  sub_id
                  updated_at
                }
                created_at
                id
                is_active
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
                sub_id
                updated_at
              }
              created_at
              icon
              id
              is_active
              name
              priority
              slug
              sub_id
              updated_at
            }
            message
          }
        }
      `;
      const response = await graphQLClient.request(GET_CATEGORIES);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getCategories).toBeDefined();
      expect(response.getCategories.message).toBeDefined();
      expect(response.getCategories.categories).toBeDefined();
    });

    test("getCategory", async () => {
      const GET_CATEGORY = gql`
        query getCategory($id: String!) {
          getCategory(id: $id) {
            category {
              categoryProducts {
                categories {
                  categoryProducts {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  icon
                  id
                  is_active
                  name
                  priority
                  slug
                  sub_id
                  updated_at
                }
                created_at
                id
                is_active
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
                sub_id
                updated_at
              }
              created_at
              icon
              id
              is_active
              name
              priority
              slug
              sub_id
              updated_at
            }
            message
          }
        }
      `;
      const variables = {
        id: "",
      };
      const response = await graphQLClient.request(GET_CATEGORY, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getCategory).toBeDefined();
      expect(response.getCategory.message).toBeDefined();
      expect(response.getCategory.category).toBeDefined();
    });

    test("getSubCategories", async () => {
      const GET_SUB_CATEGORIES = gql`
        query getSubCategories($sub_id: String!) {
          getSubCategories(sub_id: $sub_id) {
            message
            subCategories {
              categoryProducts {
                categories {
                  categoryProducts {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  icon
                  id
                  is_active
                  name
                  priority
                  slug
                  sub_id
                  updated_at
                }
                created_at
                id
                is_active
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
                sub_id
                updated_at
              }
              created_at
              icon
              id
              is_active
              name
              priority
              slug
              sub_id
              updated_at
            }
          }
        }
      `;
      const variables = {
        sub_id: "",
      };
      const response = await graphQLClient.request(
        GET_SUB_CATEGORIES,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getSubCategories).toBeDefined();
      expect(response.getSubCategories.message).toBeDefined();
      expect(response.getSubCategories.subCategories).toBeDefined();
    });
  });
};
