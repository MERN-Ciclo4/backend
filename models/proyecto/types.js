import { gql } from "apollo-server-core";

export const projectTypes = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  input ObjetivoInput {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }
  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }
  input ProyectoParams {
    _id: String
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
    objetivos: [String]
  }
  input ProyectoBody {
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
    objetivos: [String]
  }
  type Query {
    Proyectos: [Proyecto]

    FiltrarProyecto(params: ProyectoParams!): [Proyecto]
  }
  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: String!
      fechaFin: String!
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String!
      objetivos: [ObjetivoInput]
    ): Proyecto

    eliminarProyecto(_id: String!): Proyecto

    editarProyecto(_id: String!, body: ProyectoBody!): Proyecto
  }
`;
