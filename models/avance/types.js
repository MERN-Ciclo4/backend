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
  input AvanceParams {
    _id: String
    descripcion: String
    observaciones: [String]
    fecha: Date
    proyecto: String
    creadoPor: String
  }
  input AvanceBody {
    descripcion: String
    observaciones: [String]
    fecha: Date
    proyecto: String
    creadoPor: String
  }
  type Query {
    Avances: [Avance]
    FiltrarAvance(params: AvanceParams!): [Avance]
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
