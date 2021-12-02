import { gql } from "apollo-server-core";

export const inscriptionTypes = gql`
  
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date!
    fechaEgreso: Date!
    proyecto: Proyecto!
    estudiante: Usuario!
  }
  input InscripcionParams {
    _id: String
    estado: Enum_EstadoInscripcion
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: String
    estudiante: String
  }
  input InscripcionBody {
    estado: Enum_EstadoInscripcion
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: String
    estudiante: String
  }
  type Query {
    Inscripciones: [Inscripcion]

    FiltrarInscripcion(params: InscripcionParams!): [Inscripcion]
  }
  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion
      fechaIngreso: Date!
      fechaEgreso: Date!
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    eliminarInscripcion(_id: String!): Inscripcion

    editarInscripcion(
      _id: String!
      body: InscripcionBody!
    ): Inscripcion
  }
`;
