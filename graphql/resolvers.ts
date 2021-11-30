import { Enum_EstadoUsuario } from "../models/enums";
import { projectModel } from "../models/project";
import { userModel } from "../models/user";

export const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = userModel.find({});
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = userModel.findOne({ ...args });
      return usuario;
    },
    Proyectos: async (parent, args) => {
      const projects = projectModel.find({}).populate('lider');
      return projects;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      console.log(args);
      const proyecto = {...args, fechaInicio: new Date(args.fechaInicio), fechaFin: new Date(args.fechaFin)};
      const project = projectModel.create(proyecto);
      return project;
    },
    crearUsuario: async (parent, args) => {
      console.log("estoy creando usuarios");
      // console.log(parent);
      // console.log(args);
      // const usuario = {
      //   ...args,
      //   estado: args.estado || Enum_EstadoUsuario.PENDIENTE,
      // };
      const user = userModel.create(args);
      return user;
    },
    eliminarUsuario: async (parent, args) => {
      const user = userModel.findOneAndDelete(args);
      return user;
    },
    editarUsuario: async (parent, { _id, ...body }) => {
      const user = userModel.findOneAndUpdate({ _id }, body, {
        runValidators: true,
        new: true,
      });
      return user;
    },
  },
};
