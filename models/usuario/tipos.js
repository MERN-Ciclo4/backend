import { gql } from 'apollo-server-express';

const tiposUsuario = gql`

type Usuario{
    _id:ID!
    nombre:String!
    apellido:String!
    identificacion:String!
    correo:String!
    estado:Enum_EstadoUsuario
    rol:Enum_rol!
}

type Query{
    Usuarios:[Usuario]
}

type Mutation{
    crearUsuario(
        nombre:String!
        apellido:String!
        identificacion:String!
        correo:String!
        estado:Enum_EstadoUsuario
        rol:Enum_rol!
    ):Usuario

    editarUsuario(
        _id:String
        nombre:String
        apellido:String
        identificacion:String
        correo:String
        estado:Enum_EstadoUsuario
        rol:Enum_rol
    ):Usuario

    eliminarUsuario(_id:String!):Usuario

}
`;

export { tiposUsuario };
