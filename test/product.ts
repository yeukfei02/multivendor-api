import { GraphQLClient, gql } from "graphql-request";
import { getRootUrl } from "../helpers/helpers";

const rootUrl = getRootUrl();
const graphQLClient = new GraphQLClient(rootUrl);

export const productTest = () => {
  describe("product test", () => {
    test("getProductCategories", async () => {
      const GET_PRODUCT_CATEGORIES = gql`
        query getProductCategories($category_id: String!) {
          getProductCategories(category_id: $category_id) {
            message
            productCategories {
              allow_order
              brand {
                created_at
                id
                is_active
                name
                products {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                slug
                updated_at
              }
              category_products {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                sub_id
                updated_at
              }
              created_at
              id
              is_active
              order_items {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                updated_at
              }
              phone
              phone_confirmed
              type
              updated_at
              vendor_products {
                created_at
                id
                min_count
                price
                product {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
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
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                  working_hours
                }
              }
            }
          }
        }
      `;
      const variables = {
        category_id: "",
      };
      const response = await graphQLClient.request(
        GET_PRODUCT_CATEGORIES,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getProductCategories).toBeDefined();
      expect(response.getProductCategories.message).toBeDefined();
      expect(response.getProductCategories.productCategories).toBeDefined();
    });

    test("getProductSubCategories", async () => {
      const GET_PRODUCT_SUB_CATEGORIES = gql`
        query getProductSubCategories($sub_id: String!) {
          getProductSubCategories(sub_id: $sub_id) {
            message
            productSubCategories {
              allow_order
              brand {
                created_at
                id
                is_active
                name
                products {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                slug
                updated_at
              }
              category_products {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                sub_id
                updated_at
              }
              created_at
              id
              is_active
              order_items {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                updated_at
              }
              phone
              phone_confirmed
              type
              updated_at
              vendor_products {
                created_at
                id
                min_count
                price
                product {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
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
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                  working_hours
                }
              }
            }
          }
        }
      `;
      const variables = {
        sub_id: "",
      };
      const response = await graphQLClient.request(
        GET_PRODUCT_SUB_CATEGORIES,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getProductSubCategories).toBeDefined();
      expect(response.getProductSubCategories.message).toBeDefined();
      expect(
        response.getProductSubCategories.productSubCategories
      ).toBeDefined();
    });

    test("getProduct", async () => {
      const GET_PRODUCT = gql`
        query getProduct($id: String!) {
          getProduct(id: $id) {
            message
            product {
              allow_order
              brand {
                created_at
                id
                is_active
                name
                products {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                slug
                updated_at
              }
              category_products {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                sub_id
                updated_at
              }
              created_at
              id
              is_active
              order_items {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                updated_at
              }
              phone
              phone_confirmed
              type
              updated_at
              vendor_products {
                created_at
                id
                min_count
                price
                product {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
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
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                  working_hours
                }
              }
            }
          }
        }
      `;
      const variables = {
        id: "",
      };
      const response = await graphQLClient.request(GET_PRODUCT, variables);
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getProduct).toBeDefined();
      expect(response.getProduct.message).toBeDefined();
      expect(response.getProduct.product).toBeDefined();
    });

    test("getBrandProducts", async () => {
      const GET_BRAND_PRODUCTS = gql`
        query getBrandProducts($brand_id: String!) {
          getBrandProducts(brand_id: $brand_id) {
            brandProducts {
              allow_order
              brand {
                created_at
                id
                is_active
                name
                products {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                slug
                updated_at
              }
              category_products {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                sub_id
                updated_at
              }
              created_at
              id
              is_active
              order_items {
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
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                }
                updated_at
              }
              phone
              phone_confirmed
              type
              updated_at
              vendor_products {
                created_at
                id
                min_count
                price
                product {
                  allow_order
                  brand {
                    created_at
                    id
                    is_active
                    name
                    slug
                    updated_at
                  }
                  category_products {
                    created_at
                    id
                    is_active
                    sub_id
                    updated_at
                  }
                  created_at
                  id
                  is_active
                  order_items {
                    count
                    created_at
                    id
                    price
                    updated_at
                  }
                  phone
                  phone_confirmed
                  type
                  updated_at
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
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
                  vendor_products {
                    created_at
                    id
                    min_count
                    price
                    unit
                    updated_at
                  }
                  working_hours
                }
              }
            }
            message
          }
        }
      `;
      const variables = {
        brand_id: "",
      };
      const response = await graphQLClient.request(
        GET_BRAND_PRODUCTS,
        variables
      );
      console.log("response = ", response);

      expect(response).toBeDefined();
      expect(response.getBrandProducts).toBeDefined();
      expect(response.getBrandProducts.message).toBeDefined();
      expect(response.getBrandProducts.brandProducts).toBeDefined();
    });
  });
};
