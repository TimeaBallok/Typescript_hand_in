import gql from 'graphql-tag';

const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
    age: Int!
    occupation: String!
    salary: Float!
    address: Address!
    createdAt: String!
  }

  type Address {
    id: ID!
    country: String!
    city: String!
    street: String!
    zipCode: String!
    residents: [Person!]!
    createdAt: String!
  }

  input CreatePersonInput {
  name: String!
  age: Int!
  occupation: String
  salary: Float
  address: CreateAddressInput!
}

input CreateAddressInput {
  country: String!
  city: String!
  street: String!
  zipCode: String!
}

input UpdatePersonInput {
  name: String
  age: Int
  occupation: String
  salary: Float
  address: UpdateAddressInput
}

input UpdateAddressInput {
  country: String
  city: String
  street: String
  zipCode: String
}

type Query {
  person(id: ID!): Person
  people: [Person!]!
  address(id: ID!): Address
  addresses: [Address!]!
}

type Mutation {
  createPerson(input: CreatePersonInput!): Person!
 
}
`;

export default typeDefs;