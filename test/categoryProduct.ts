import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

export const categoryProductTest = () => {
  describe("categoryProduct test", () => {
    test("getCategoryProducts", async () => {
      const GET_CATEGORY_PRODUCTS = gql`
        query getCategoryProducts($category_id: String!) {
          getCategoryProducts(category_id: $category_id) {
            categoryProducts {
              categories {
                categoryProducts {
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
            message
          }
        }
      `;
      const variables = {
        category_id: "",
      };
      const response = await graphQLClient.request(
        GET_CATEGORY_PRODUCTS,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getCategoryProducts).toBeDefined();
      expect(response.getCategoryProducts.message).toBeDefined();
      expect(response.getCategoryProducts.categoryProducts).toBeDefined();
    });

    test("getSubCategoryProducts", async () => {
      const GET_SUB_CATEGORY_PRODUCTS = gql`
        query getSubCategoryProducts($sub_id: String!) {
          getSubCategoryProducts(sub_id: $sub_id) {
            message
            subCategoryProducts {
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
          }
        }
      `;
      const variables = {
        sub_id: "",
      };
      const response = await graphQLClient.request(
        GET_SUB_CATEGORY_PRODUCTS,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getSubCategoryProducts).toBeDefined();
      expect(response.getSubCategoryProducts.message).toBeDefined();
      expect(response.getSubCategoryProducts.subCategoryProducts).toBeDefined();
    });
  });
};
