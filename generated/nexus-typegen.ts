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
  GetUserResult: { // root type
    message: string; // String!
    user?: NexusGenRootTypes['User'] | null; // User
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
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    phone: string; // String!
    phone_confirmed: boolean; // Boolean!
    type?: string | null; // String
    updated_at: string; // String!
  }
  Query: {};
  User: { // root type
    allow_order: boolean; // Boolean!
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    phone: string; // String!
    phone_confirmed: boolean; // Boolean!
    updated_at: string; // String!
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
  GetUserResult: { // field return type
    message: string; // String!
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    addAddress: NexusGenRootTypes['AddAddressResult']; // AddAddressResult!
    addCompany: NexusGenRootTypes['AddCompanyResult']; // AddCompanyResult!
    addOrder: NexusGenRootTypes['AddOrderResult']; // AddOrderResult!
    addUser: NexusGenRootTypes['AddUserResult']; // AddUserResult!
    generateCode: NexusGenRootTypes['GenerateCodeResult']; // GenerateCodeResult!
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
    created_at: string; // String!
    id: string; // String!
    is_active: boolean; // Boolean!
    phone: string; // String!
    phone_confirmed: boolean; // Boolean!
    type: string | null; // String
    updated_at: string; // String!
  }
  Query: { // field return type
    checkCode: NexusGenRootTypes['CheckCodeResult']; // CheckCodeResult!
    getAddress: NexusGenRootTypes['GetAddressResult']; // GetAddressResult!
    getAddresses: NexusGenRootTypes['GetAddressesResult']; // GetAddressesResult!
    getCompanies: NexusGenRootTypes['GetCompaniesResult']; // GetCompaniesResult!
    getCompany: NexusGenRootTypes['GetCompanyResult']; // GetCompanyResult!
    getItems: NexusGenRootTypes['GetItemsResult']; // GetItemsResult!
    getOrder: NexusGenRootTypes['GetOrderResult']; // GetOrderResult!
    getOrders: NexusGenRootTypes['GetOrdersResult']; // GetOrdersResult!
    getUser: NexusGenRootTypes['GetUserResult']; // GetUserResult!
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
  GetUserResult: { // field return type name
    message: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    addAddress: 'AddAddressResult'
    addCompany: 'AddCompanyResult'
    addOrder: 'AddOrderResult'
    addUser: 'AddUserResult'
    generateCode: 'GenerateCodeResult'
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
    created_at: 'String'
    id: 'String'
    is_active: 'Boolean'
    phone: 'String'
    phone_confirmed: 'Boolean'
    type: 'String'
    updated_at: 'String'
  }
  Query: { // field return type name
    checkCode: 'CheckCodeResult'
    getAddress: 'GetAddressResult'
    getAddresses: 'GetAddressesResult'
    getCompanies: 'GetCompaniesResult'
    getCompany: 'GetCompanyResult'
    getItems: 'GetItemsResult'
    getOrder: 'GetOrderResult'
    getOrders: 'GetOrdersResult'
    getUser: 'GetUserResult'
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
    getUser: { // args
      phone: string; // String!
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