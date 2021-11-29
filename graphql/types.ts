import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Usuario {
    nombre: String!
  }
  type Query {
    Usuarios: [Usuario]
  }
`;
