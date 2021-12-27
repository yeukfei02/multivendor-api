import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

export const vendorProductTest = () => {
  describe("vendorProduct test", () => {
    test("getProductVendors", async () => {
      const GET_PRODUCT_VENDORS = gql`
        query getProductVendors($input: ProductVendorsInput!) {
          getProductVendors(input: $input) {
            message
            productVendors {
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
        }
      `;
      const variables = {
        product_id: "",
        vendor_id: "",
      };
      const response = await graphQLClient.request(
        GET_PRODUCT_VENDORS,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getProductVendors).toBeDefined();
      expect(response.getProductVendors.message).toBeDefined();
      expect(response.getProductVendors.productVendors).toBeDefined();
    });

    test("getVendorProducts", async () => {
      const GET_VENDOR_PRODUCTS = gql`
        query getVendorProducts($input: VendorProductsInput!) {
          getVendorProducts(input: $input) {
            message
            vendorProducts {
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
        }
      `;
      const variables = {
        vendor_id: "",
        sub_id: "",
        category_id: "",
      };
      const response = await graphQLClient.request(
        GET_VENDOR_PRODUCTS,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getVendorProducts).toBeDefined();
      expect(response.getVendorProducts.message).toBeDefined();
      expect(response.getVendorProducts.vendorProducts).toBeDefined();
    });
  });
};
