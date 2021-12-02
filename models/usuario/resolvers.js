import { userModel } from "./usuario.js";

export const userResolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = userModel
        .find({})
        .populate("proyectosLiderados")
        .populate("avancesCreados")
        .populate("inscripciones");
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = userModel.findOne({ ...args });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const user = userModel.create({ ...args });
      return user;
    },
    eliminarUsuario: async (parent, args) => {
      const user = userModel.findOneAndDelete({ ...args });
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
