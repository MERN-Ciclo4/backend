import { projectModel } from "../proyecto/proyecto.js";
import { userModel } from "../usuario/usuario.js";
import { inscriptionModel } from "./inscripcion.js";

export const inscriptionResolver = {
  Inscripcion: {
    proyecto: async ({ proyecto }, args, context) => {
      const project = await projectModel.findOne({ _id: proyecto });
      return project;
    },
    estudiante: async ({estudiante}, args, context) => {
      const user = await userModel.findOne({ _id: estudiante });
      return user;
    },
  },
  Query: {
    Inscripciones: async (parent, { filter }, context) => {
      const filtrado = {};
      if (filter) {
        filtrado = filter;
      }
      const inscripciones = await inscriptionModel.find(filter);
      return inscripciones;
    },
    Inscripcion: async (parent, { _id }) => {
      const inscripcion = await inscriptionModel.findOne({ _id });
      return inscripcion;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcion = await inscriptionModel.create({ ...args });
      return inscripcion;
    },
    eliminarInscripcion: async (parent, { _id }) => {
      const inscripcion = await inscriptionModel.findOneAndDelete({
        _id,
      });
      return inscripcion;
    },
    editarInscripcion: async (parent, { _id, body }) => {
      const inscripcion = await inscriptionModel.findOneAndUpdate(
        { _id },
        { ...body },
        { runValidators: true, new: true }
      );
      return inscripcion;
    },
  },
};
