import { advancementModel } from "../avance/avance.js";
import { inscriptionModel } from "../inscripcion/inscripcion.js";
import { projectModel } from "../proyecto/proyecto.js";
import { userModel } from "./usuario.js";

export const userResolvers = {
  Usuario: {
    proyectosLiderados: async ({ _id }, args, context) => {
      const projects = await projectModel.find({ lider: _id });
      return projects;
    },
    avancesCreados: async ({ _id }, args, context) => {
      const avances = await advancementModel.find({ creadoPor: _id });
      return avances;
    },
    inscripciones: async ({ _id }, args, context) => {
      const inscriptions = await inscriptionModel.find({ estudiante: _id });
      return inscriptions;
    },
  },
  Query: {
    Usuarios: async (parent, { filter }, context) => {
      const filtrado = {};
      if (filter) {
        filtrado = filter;
      }
      const usuarios = await userModel.find(filtrado);
      return usuarios;
    },
    Usuario: async (parent, args, context) => {
      if (Object.keys(args).length === 0) {
        throw new Error("Debe proporcionar argumentos");
      }
      const usuario = await userModel.findOne({ ...args });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args, context) => {
      const user = await userModel.create({ ...args });
      return user;
    },
    eliminarUsuario: async (parent, args, context) => {
      if (Object.keys(args).length === 0) {
        throw new Error("Debe proporcionar argumentos");
      }
      const user = await userModel.findOneAndDelete({ ...args });
      const proyectos = await projectModel.deleteMany({ lider: user._id });
      const inscripciones = await inscriptionModel.deleteMany({
        estudiante: user._id,
      });
      const avances = await advancementModel.deleteMany({
        creadoPor: user._id,
      });
      return user;
    },
    editarUsuario: async (parent, { _id, body }, context) => {
      const user = await userModel.findOneAndUpdate({ _id }, body, {
        runValidators: true,
        new: true,
      });
      return user;
    },
  },
};
