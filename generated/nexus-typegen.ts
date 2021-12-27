/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AddAddressInput: { // input type
    address: string; // String!
    comment: string; // String!
    geo_code: string; // String!
    phone: string; // String!
    user_id: string; // String!
  }
  AddCompanyInput: { // input type
    address: string; // String!
    code: string; // String!
    name: string; // String!
    user_id: string; // String!
  }
  AddOrderInput: { // input type
    address: string; // String!
    comment?: string | null; // String
    company_id: string; // String!
    delivery_at?: string | null; // String
    delivery_price?: number | null; // Float
    discount?: number | null; // Float
    number: number; // Int!
    status: string; // String!
    total?: number | null; // Float
    user_id: string; // String!
    vendor_id: string; // String!
  }
  CheckCodeInput: { // input type
    code: string; // String!
    phone: string; // String!
  }
  ProductVendorsInput: { // input type
    product_id: string; // String!
    vendor_id: string; // String!
  }
  VendorProductsInput: { // input type
    category_id: string; // String!
    sub_id: string; // String!
    vendor_id: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AddAddressResult: { // root type
    message: string; // String!
  }
  AddCompanyResult: { // root type
    message: string; // String!
  }
  AddOrderResult: { // root type
    message: string; // String!
  }
  AddUserResult: { // root type
    message: string; // String!
  }
  Brand: { // root type
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    name: string; // String!
    products?: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
    slug?: string | null; // String
    updated_at: string; // String!
  }
  Category: { // root type
    categoryProducts?: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
    created_at: string; // String!
    icon?: string | null; // String
    id: string; // String!
    is_active: boolean; // Boolean!
    name: string; // String!
    priority?: number | null; // Int
    slug?: string | null; // String
    sub_id: string; // String!
    updated_at: string; // String!
  }
  CategoryProduct: { // root type
    categories?: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    products?: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
    sub_id: string; // String!
    updated_at: string; // String!
  }
  CheckCodeResult: { // root type
    message: string; // String!
    phoneConfirmation?: NexusGenRootTypes['PhoneConfirmation'] | null; // PhoneConfirmation
  }
  Company: { // root type
    address: string; // String!
    code: string; // String!
    created_at: string; // String!
    id: string; // String!
    name: string; // String!
    updated_at: string; // String!
    users: NexusGenRootTypes['User']; // User!
  }
  DeliveryAddress: { // root type
    address: string; // String!
    comment: string; // String!
    created_at: string; // String!
    geo_code: string; // String!
    id: string; // String!
    last_used?: string | null; // String
    phone: string; // String!
    updated_at: string; // String!
    users: NexusGenRootTypes['User']; // User!
  }
  GenerateCodeResult: { // root type
    code: string; // String!
    message: string; // String!
  }
  GetAddressResult: { // root type
    deliveryAddress?: NexusGenRootTypes['DeliveryAddress'] | null; // DeliveryAddress
    message: string; // String!
  }
  GetAddressesResult: { // root type
    deliveryAddresses?: Array<NexusGenRootTypes['DeliveryAddress'] | null> | null; // [DeliveryAddress]
    message: string; // String!
  }
  GetBrandProductsResult: { // root type
    brandProducts?: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
    message: string; // String!
  }
  GetBrandResult: { // root type
    brand?: NexusGenRootTypes['Brand'] | null; // Brand
    message: string; // String!
  }
  GetCategoriesResult: { // root type
    categories?: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    message: string; // String!
  }
  GetCategoryProductsResult: { // root type
    categoryProducts?: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
    message: string; // String!
  }
  GetCategoryResult: { // root type
    category?: NexusGenRootTypes['Category'] | null; // Category
    message: string; // String!
  }
  GetCompaniesResult: { // root type
    companies?: Array<NexusGenRootTypes['Company'] | null> | null; // [Company]
    message: string; // String!
  }
  GetCompanyResult: { // root type
    company?: NexusGenRootTypes['Company'] | null; // Company
    message: string; // String!
  }
  GetItemsResult: { // root type
    message: string; // String!
    orderItems?: Array<NexusGenRootTypes['OrderItem'] | null> | null; // [OrderItem]
  }
  GetOrderResult: { // root type
    message: string; // String!
    order?: NexusGenRootTypes['Order'] | null; // Order
  }
  GetOrdersResult: { // root type
    message: string; // String!
    orders?: Array<NexusGenRootTypes['Order'] | null> | null; // [Order]
  }
  GetProductCategoriesResult: { // root type
    message: string; // String!
    productCategories?: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
  }
  GetProductResult: { // root type
    message: string; // String!
    product?: NexusGenRootTypes['Product'] | null; // Product
  }
  GetProductSubCategoriesResult: { // root type
    message: string; // String!
    productSubCategories?: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
  }
  GetProductVendorsResult: { // root type
    message: string; // String!
    productVendors?: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
  }
  GetSubCategoriesResult: { // root type
    message: string; // String!
    subCategories?: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
  }
  GetSubCategoryProductsResult: { // root type
    message: string; // String!
    subCategoryProducts?: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
  }
  GetUserResult: { // root type
    message: string; // String!
    user?: NexusGenRootTypes['User'] | null; // User
  }
  GetVendorProductsResult: { // root type
    message: string; // String!
    vendorProducts?: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
  }
  GetVendorResult: { // root type
    message: string; // String!
    vendor?: NexusGenRootTypes['Vendor'] | null; // Vendor
  }
  Mutation: {};
  Order: { // root type
    address: string; // String!
    comment?: string | null; // String
    created_at: string; // String!
    deliver_at?: string | null; // String
    delivery_price?: number | null; // Float
    discount?: number | null; // Float
    id: string; // String!
    number: number; // Float!
    status: string; // String!
    total?: number | null; // Float
    updated_at: string; // String!
    users: NexusGenRootTypes['User']; // User!
  }
  OrderItem: { // root type
    count: number; // Int!
    created_at: string; // String!
    id: string; // String!
    order: NexusGenRootTypes['Order']; // Order!
    price: number; // Float!
    product: NexusGenRootTypes['Product']; // Product!
    updated_at: string; // String!
  }
  PhoneConfirmation: { // root type
    code: string; // String!
    created_at: string; // String!
    id: string; // String!
    ip: string; // String!
    phone: string; // String!
    updated_at: string; // String!
    used_at?: string | null; // String
  }
  Product: { // root type
    allow_order: boolean; // Boolean!
    brand?: NexusGenRootTypes['Brand'] | null; // Brand
    category_products?: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    order_items?: Array<NexusGenRootTypes['OrderItem'] | null> | null; // [OrderItem]
    phone: string; // String!
    phone_confirmed: boolean; // Boolean!
    type?: string | null; // String
    updated_at: string; // String!
    vendor_products?: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
  }
  Query: {};
  RepeatOrderResult: { // root type
    message: string; // String!
  }
  User: { // root type
    allow_order: boolean; // Boolean!
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    phone: string; // String!
    phone_confirmed: boolean; // Boolean!
    updated_at: string; // String!
  }
  Vendor: { // root type
    created_at: string; // String!
    delivery: string; // String!
    description: string; // String!
    id: string; // String!
    name: string; // String!
    orders?: Array<NexusGenRootTypes['Order'] | null> | null; // [Order]
    payment: string; // String!
    rating: number; // Int!
    slug?: string | null; // String
    updated_at: string; // String!
    vendor_products?: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
    working_hours: number; // Int!
  }
  VendorProduct: { // root type
    created_at: string; // String!
    id: string; // String!
    min_count: number; // Int!
    price: number; // Float!
    product?: NexusGenRootTypes['Product'] | null; // Product
    unit: number; // Int!
    updated_at: string; // String!
    vendor?: NexusGenRootTypes['Vendor'] | null; // Vendor
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AddAddressResult: { // field return type
    message: string; // String!
  }
  AddCompanyResult: { // field return type
    message: string; // String!
  }
  AddOrderResult: { // field return type
    message: string; // String!
  }
  AddUserResult: { // field return type
    message: string; // String!
  }
  Brand: { // field return type
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    name: string; // String!
    products: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
    slug: string | null; // String
    updated_at: string; // String!
  }
  Category: { // field return type
    categoryProducts: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
    created_at: string; // String!
    icon: string | null; // String
    id: string; // String!
    is_active: boolean; // Boolean!
    name: string; // String!
    priority: number | null; // Int
    slug: string | null; // String
    sub_id: string; // String!
    updated_at: string; // String!
  }
  CategoryProduct: { // field return type
    categories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    products: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
    sub_id: string; // String!
    updated_at: string; // String!
  }
  CheckCodeResult: { // field return type
    message: string; // String!
    phoneConfirmation: NexusGenRootTypes['PhoneConfirmation'] | null; // PhoneConfirmation
  }
  Company: { // field return type
    address: string; // String!
    code: string; // String!
    created_at: string; // String!
    id: string; // String!
    name: string; // String!
    updated_at: string; // String!
    users: NexusGenRootTypes['User']; // User!
  }
  DeliveryAddress: { // field return type
    address: string; // String!
    comment: string; // String!
    created_at: string; // String!
    geo_code: string; // String!
    id: string; // String!
    last_used: string | null; // String
    phone: string; // String!
    updated_at: string; // String!
    users: NexusGenRootTypes['User']; // User!
  }
  GenerateCodeResult: { // field return type
    code: string; // String!
    message: string; // String!
  }
  GetAddressResult: { // field return type
    deliveryAddress: NexusGenRootTypes['DeliveryAddress'] | null; // DeliveryAddress
    message: string; // String!
  }
  GetAddressesResult: { // field return type
    deliveryAddresses: Array<NexusGenRootTypes['DeliveryAddress'] | null> | null; // [DeliveryAddress]
    message: string; // String!
  }
  GetBrandProductsResult: { // field return type
    brandProducts: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
    message: string; // String!
  }
  GetBrandResult: { // field return type
    brand: NexusGenRootTypes['Brand'] | null; // Brand
    message: string; // String!
  }
  GetCategoriesResult: { // field return type
    categories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    message: string; // String!
  }
  GetCategoryProductsResult: { // field return type
    categoryProducts: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
    message: string; // String!
  }
  GetCategoryResult: { // field return type
    category: NexusGenRootTypes['Category'] | null; // Category
    message: string; // String!
  }
  GetCompaniesResult: { // field return type
    companies: Array<NexusGenRootTypes['Company'] | null> | null; // [Company]
    message: string; // String!
  }
  GetCompanyResult: { // field return type
    company: NexusGenRootTypes['Company'] | null; // Company
    message: string; // String!
  }
  GetItemsResult: { // field return type
    message: string; // String!
    orderItems: Array<NexusGenRootTypes['OrderItem'] | null> | null; // [OrderItem]
  }
  GetOrderResult: { // field return type
    message: string; // String!
    order: NexusGenRootTypes['Order'] | null; // Order
  }
  GetOrdersResult: { // field return type
    message: string; // String!
    orders: Array<NexusGenRootTypes['Order'] | null> | null; // [Order]
  }
  GetProductCategoriesResult: { // field return type
    message: string; // String!
    productCategories: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
  }
  GetProductResult: { // field return type
    message: string; // String!
    product: NexusGenRootTypes['Product'] | null; // Product
  }
  GetProductSubCategoriesResult: { // field return type
    message: string; // String!
    productSubCategories: Array<NexusGenRootTypes['Product'] | null> | null; // [Product]
  }
  GetProductVendorsResult: { // field return type
    message: string; // String!
    productVendors: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
  }
  GetSubCategoriesResult: { // field return type
    message: string; // String!
    subCategories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
  }
  GetSubCategoryProductsResult: { // field return type
    message: string; // String!
    subCategoryProducts: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
  }
  GetUserResult: { // field return type
    message: string; // String!
    user: NexusGenRootTypes['User'] | null; // User
  }
  GetVendorProductsResult: { // field return type
    message: string; // String!
    vendorProducts: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
  }
  GetVendorResult: { // field return type
    message: string; // String!
    vendor: NexusGenRootTypes['Vendor'] | null; // Vendor
  }
  Mutation: { // field return type
    addAddress: NexusGenRootTypes['AddAddressResult']; // AddAddressResult!
    addCompany: NexusGenRootTypes['AddCompanyResult']; // AddCompanyResult!
    addOrder: NexusGenRootTypes['AddOrderResult']; // AddOrderResult!
    addUser: NexusGenRootTypes['AddUserResult']; // AddUserResult!
    generateCode: NexusGenRootTypes['GenerateCodeResult']; // GenerateCodeResult!
    repeatOrder: NexusGenRootTypes['RepeatOrderResult']; // RepeatOrderResult!
  }
  Order: { // field return type
    address: string; // String!
    comment: string | null; // String
    created_at: string; // String!
    deliver_at: string | null; // String
    delivery_price: number | null; // Float
    discount: number | null; // Float
    id: string; // String!
    number: number; // Float!
    status: string; // String!
    total: number | null; // Float
    updated_at: string; // String!
    users: NexusGenRootTypes['User']; // User!
  }
  OrderItem: { // field return type
    count: number; // Int!
    created_at: string; // String!
    id: string; // String!
    order: NexusGenRootTypes['Order']; // Order!
    price: number; // Float!
    product: NexusGenRootTypes['Product']; // Product!
    updated_at: string; // String!
  }
  PhoneConfirmation: { // field return type
    code: string; // String!
    created_at: string; // String!
    id: string; // String!
    ip: string; // String!
    phone: string; // String!
    updated_at: string; // String!
    used_at: string | null; // String
  }
  Product: { // field return type
    allow_order: boolean; // Boolean!
    brand: NexusGenRootTypes['Brand'] | null; // Brand
    category_products: Array<NexusGenRootTypes['CategoryProduct'] | null> | null; // [CategoryProduct]
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    order_items: Array<NexusGenRootTypes['OrderItem'] | null> | null; // [OrderItem]
    phone: string; // String!
    phone_confirmed: boolean; // Boolean!
    type: string | null; // String
    updated_at: string; // String!
    vendor_products: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
  }
  Query: { // field return type
    checkCode: NexusGenRootTypes['CheckCodeResult']; // CheckCodeResult!
    getAddress: NexusGenRootTypes['GetAddressResult']; // GetAddressResult!
    getAddresses: NexusGenRootTypes['GetAddressesResult']; // GetAddressesResult!
    getBrand: NexusGenRootTypes['GetBrandResult']; // GetBrandResult!
    getBrandProducts: NexusGenRootTypes['GetBrandProductsResult']; // GetBrandProductsResult!
    getCategories: NexusGenRootTypes['GetCategoriesResult']; // GetCategoriesResult!
    getCategory: NexusGenRootTypes['GetCategoryResult']; // GetCategoryResult!
    getCategoryProducts: NexusGenRootTypes['GetCategoryProductsResult']; // GetCategoryProductsResult!
    getCompanies: NexusGenRootTypes['GetCompaniesResult']; // GetCompaniesResult!
    getCompany: NexusGenRootTypes['GetCompanyResult']; // GetCompanyResult!
    getItems: NexusGenRootTypes['GetItemsResult']; // GetItemsResult!
    getOrder: NexusGenRootTypes['GetOrderResult']; // GetOrderResult!
    getOrders: NexusGenRootTypes['GetOrdersResult']; // GetOrdersResult!
    getProduct: NexusGenRootTypes['GetProductResult']; // GetProductResult!
    getProductCategories: NexusGenRootTypes['GetProductCategoriesResult']; // GetProductCategoriesResult!
    getProductSubCategories: NexusGenRootTypes['GetProductSubCategoriesResult']; // GetProductSubCategoriesResult!
    getProductVendors: NexusGenRootTypes['GetProductVendorsResult']; // GetProductVendorsResult!
    getSubCategories: NexusGenRootTypes['GetSubCategoriesResult']; // GetSubCategoriesResult!
    getSubCategoryProducts: NexusGenRootTypes['GetSubCategoryProductsResult']; // GetSubCategoryProductsResult!
    getUser: NexusGenRootTypes['GetUserResult']; // GetUserResult!
    getVendor: NexusGenRootTypes['GetVendorResult']; // GetVendorResult!
    getVendorProducts: NexusGenRootTypes['GetVendorProductsResult']; // GetVendorProductsResult!
  }
  RepeatOrderResult: { // field return type
    message: string; // String!
  }
  User: { // field return type
    allow_order: boolean; // Boolean!
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    phone: string; // String!
    phone_confirmed: boolean; // Boolean!
    updated_at: string; // String!
  }
  Vendor: { // field return type
    created_at: string; // String!
    delivery: string; // String!
    description: string; // String!
    id: string; // String!
    name: string; // String!
    orders: Array<NexusGenRootTypes['Order'] | null> | null; // [Order]
    payment: string; // String!
    rating: number; // Int!
    slug: string | null; // String
    updated_at: string; // String!
    vendor_products: Array<NexusGenRootTypes['VendorProduct'] | null> | null; // [VendorProduct]
    working_hours: number; // Int!
  }
  VendorProduct: { // field return type
    created_at: string; // String!
    id: string; // String!
    min_count: number; // Int!
    price: number; // Float!
    product: NexusGenRootTypes['Product'] | null; // Product
    unit: number; // Int!
    updated_at: string; // String!
    vendor: NexusGenRootTypes['Vendor'] | null; // Vendor
  }
}

export interface NexusGenFieldTypeNames {
  AddAddressResult: { // field return type name
    message: 'String'
  }
  AddCompanyResult: { // field return type name
    message: 'String'
  }
  AddOrderResult: { // field return type name
    message: 'String'
  }
  AddUserResult: { // field return type name
    message: 'String'
  }
  Brand: { // field return type name
    created_at: 'String'
    id: 'String'
    is_active: 'Boolean'
    name: 'String'
    products: 'Product'
    slug: 'String'
    updated_at: 'String'
  }
  Category: { // field return type name
    categoryProducts: 'CategoryProduct'
    created_at: 'String'
    icon: 'String'
    id: 'String'
    is_active: 'Boolean'
    name: 'String'
    priority: 'Int'
    slug: 'String'
    sub_id: 'String'
    updated_at: 'String'
  }
  CategoryProduct: { // field return type name
    categories: 'Category'
    created_at: 'String'
    id: 'String'
    is_active: 'Boolean'
    products: 'Product'
    sub_id: 'String'
    updated_at: 'String'
  }
  CheckCodeResult: { // field return type name
    message: 'String'
    phoneConfirmation: 'PhoneConfirmation'
  }
  Company: { // field return type name
    address: 'String'
    code: 'String'
    created_at: 'String'
    id: 'String'
    name: 'String'
    updated_at: 'String'
    users: 'User'
  }
  DeliveryAddress: { // field return type name
    address: 'String'
    comment: 'String'
    created_at: 'String'
    geo_code: 'String'
    id: 'String'
    last_used: 'String'
    phone: 'String'
    updated_at: 'String'
    users: 'User'
  }
  GenerateCodeResult: { // field return type name
    code: 'String'
    message: 'String'
  }
  GetAddressResult: { // field return type name
    deliveryAddress: 'DeliveryAddress'
    message: 'String'
  }
  GetAddressesResult: { // field return type name
    deliveryAddresses: 'DeliveryAddress'
    message: 'String'
  }
  GetBrandProductsResult: { // field return type name
    brandProducts: 'Product'
    message: 'String'
  }
  GetBrandResult: { // field return type name
    brand: 'Brand'
    message: 'String'
  }
  GetCategoriesResult: { // field return type name
    categories: 'Category'
    message: 'String'
  }
  GetCategoryProductsResult: { // field return type name
    categoryProducts: 'CategoryProduct'
    message: 'String'
  }
  GetCategoryResult: { // field return type name
    category: 'Category'
    message: 'String'
  }
  GetCompaniesResult: { // field return type name
    companies: 'Company'
    message: 'String'
  }
  GetCompanyResult: { // field return type name
    company: 'Company'
    message: 'String'
  }
  GetItemsResult: { // field return type name
    message: 'String'
    orderItems: 'OrderItem'
  }
  GetOrderResult: { // field return type name
    message: 'String'
    order: 'Order'
  }
  GetOrdersResult: { // field return type name
    message: 'String'
    orders: 'Order'
  }
  GetProductCategoriesResult: { // field return type name
    message: 'String'
    productCategories: 'Product'
  }
  GetProductResult: { // field return type name
    message: 'String'
    product: 'Product'
  }
  GetProductSubCategoriesResult: { // field return type name
    message: 'String'
    productSubCategories: 'Product'
  }
  GetProductVendorsResult: { // field return type name
    message: 'String'
    productVendors: 'VendorProduct'
  }
  GetSubCategoriesResult: { // field return type name
    message: 'String'
    subCategories: 'Category'
  }
  GetSubCategoryProductsResult: { // field return type name
    message: 'String'
    subCategoryProducts: 'CategoryProduct'
  }
  GetUserResult: { // field return type name
    message: 'String'
    user: 'User'
  }
  GetVendorProductsResult: { // field return type name
    message: 'String'
    vendorProducts: 'VendorProduct'
  }
  GetVendorResult: { // field return type name
    message: 'String'
    vendor: 'Vendor'
  }
  Mutation: { // field return type name
    addAddress: 'AddAddressResult'
    addCompany: 'AddCompanyResult'
    addOrder: 'AddOrderResult'
    addUser: 'AddUserResult'
    generateCode: 'GenerateCodeResult'
    repeatOrder: 'RepeatOrderResult'
  }
  Order: { // field return type name
    address: 'String'
    comment: 'String'
    created_at: 'String'
    deliver_at: 'String'
    delivery_price: 'Float'
    discount: 'Float'
    id: 'String'
    number: 'Float'
    status: 'String'
    total: 'Float'
    updated_at: 'String'
    users: 'User'
  }
  OrderItem: { // field return type name
    count: 'Int'
    created_at: 'String'
    id: 'String'
    order: 'Order'
    price: 'Float'
    product: 'Product'
    updated_at: 'String'
  }
  PhoneConfirmation: { // field return type name
    code: 'String'
    created_at: 'String'
    id: 'String'
    ip: 'String'
    phone: 'String'
    updated_at: 'String'
    used_at: 'String'
  }
  Product: { // field return type name
    allow_order: 'Boolean'
    brand: 'Brand'
    category_products: 'CategoryProduct'
    created_at: 'String'
    id: 'String'
    is_active: 'Boolean'
    order_items: 'OrderItem'
    phone: 'String'
    phone_confirmed: 'Boolean'
    type: 'String'
    updated_at: 'String'
    vendor_products: 'VendorProduct'
  }
  Query: { // field return type name
    checkCode: 'CheckCodeResult'
    getAddress: 'GetAddressResult'
    getAddresses: 'GetAddressesResult'
    getBrand: 'GetBrandResult'
    getBrandProducts: 'GetBrandProductsResult'
    getCategories: 'GetCategoriesResult'
    getCategory: 'GetCategoryResult'
    getCategoryProducts: 'GetCategoryProductsResult'
    getCompanies: 'GetCompaniesResult'
    getCompany: 'GetCompanyResult'
    getItems: 'GetItemsResult'
    getOrder: 'GetOrderResult'
    getOrders: 'GetOrdersResult'
    getProduct: 'GetProductResult'
    getProductCategories: 'GetProductCategoriesResult'
    getProductSubCategories: 'GetProductSubCategoriesResult'
    getProductVendors: 'GetProductVendorsResult'
    getSubCategories: 'GetSubCategoriesResult'
    getSubCategoryProducts: 'GetSubCategoryProductsResult'
    getUser: 'GetUserResult'
    getVendor: 'GetVendorResult'
    getVendorProducts: 'GetVendorProductsResult'
  }
  RepeatOrderResult: { // field return type name
    message: 'String'
  }
  User: { // field return type name
    allow_order: 'Boolean'
    created_at: 'String'
    id: 'String'
    is_active: 'Boolean'
    phone: 'String'
    phone_confirmed: 'Boolean'
    updated_at: 'String'
  }
  Vendor: { // field return type name
    created_at: 'String'
    delivery: 'String'
    description: 'String'
    id: 'String'
    name: 'String'
    orders: 'Order'
    payment: 'String'
    rating: 'Int'
    slug: 'String'
    updated_at: 'String'
    vendor_products: 'VendorProduct'
    working_hours: 'Int'
  }
  VendorProduct: { // field return type name
    created_at: 'String'
    id: 'String'
    min_count: 'Int'
    price: 'Float'
    product: 'Product'
    unit: 'Int'
    updated_at: 'String'
    vendor: 'Vendor'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addAddress: { // args
      input: NexusGenInputs['AddAddressInput']; // AddAddressInput!
    }
    addCompany: { // args
      input: NexusGenInputs['AddCompanyInput']; // AddCompanyInput!
    }
    addOrder: { // args
      input: NexusGenInputs['AddOrderInput']; // AddOrderInput!
    }
    addUser: { // args
      phone: string; // String!
    }
    generateCode: { // args
      phone: string; // String!
    }
    repeatOrder: { // args
      id: string; // String!
    }
  }
  Query: {
    checkCode: { // args
      input: NexusGenInputs['CheckCodeInput']; // CheckCodeInput!
    }
    getAddress: { // args
      id: string; // String!
    }
    getAddresses: { // args
      user_id: string; // String!
    }
    getBrand: { // args
      id: string; // String!
    }
    getBrandProducts: { // args
      brand_id: string; // String!
    }
    getCategory: { // args
      id: string; // String!
    }
    getCategoryProducts: { // args
      category_id: string; // String!
    }
    getCompanies: { // args
      user_id: string; // String!
    }
    getCompany: { // args
      id: string; // String!
    }
    getItems: { // args
      order_id: string; // String!
    }
    getOrder: { // args
      id: string; // String!
    }
    getOrders: { // args
      user_id: string; // String!
    }
    getProduct: { // args
      id: string; // String!
    }
    getProductCategories: { // args
      category_id: string; // String!
    }
    getProductSubCategories: { // args
      sub_id: string; // String!
    }
    getProductVendors: { // args
      input: NexusGenInputs['ProductVendorsInput']; // ProductVendorsInput!
    }
    getSubCategories: { // args
      sub_id: string; // String!
    }
    getSubCategoryProducts: { // args
      sub_id: string; // String!
    }
    getUser: { // args
      phone: string; // String!
    }
    getVendor: { // args
      id: string; // String!
    }
    getVendorProducts: { // args
      input: NexusGenInputs['VendorProductsInput']; // VendorProductsInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}