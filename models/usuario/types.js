import { gql } from "apollo-server-core";

export const userTypes = gql`
  
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario!
    rol: Enum_Rol!
    proyectosLiderados: [Proyecto]
    avancesCreados: [Avance]
    inscripciones: [Inscripcion]

  }
  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
  }
  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario

    editarUsuario(
      _id: String!
      nombre: String
      apellido: String
      identificacion: String
      correo: String
      estado: Enum_EstadoUsuario
      rol: Enum_Rol
    ): Usuario
  }
`;
