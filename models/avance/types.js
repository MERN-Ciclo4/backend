import { gql } from "apollo-server-core";

export const advancementTypes = gql`
  type Avance {
    _id: ID!
    descripcion: String!
    observaciones: [String]
    fecha: Date!
    proyecto: Proyecto!
    creadoPor: Usuario!
  }
  input AvanceBody {
    descripcion: String
    observaciones: [String]
    fecha: Date
    proyecto: String
    creadoPor: String
  }
  type Query {
    Avances(filter: AvanceBody): [Avance]

    Avance(_id: ID!): Avance
  }
  type Mutation {
    crearAvance(
      descripcion: String!
      observaciones: [String]
      fecha: Date!
      proyecto: String!
      creadoPor: String!
    ): Avance

    eliminarAvance(_id: String!): Avance

    editarAvance(_id: String!, body: AvanceBody!): Avance
  }
`;
