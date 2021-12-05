import { advancementModel } from "../avance/avance.js";
import { inscriptionModel } from "../inscripcion/inscripcion.js";
import { userModel } from "../usuario/usuario.js";
import { projectModel } from "./proyecto.js";

export const projectResolvers = {
  Proyecto: {
    lider: async ({ lider }, args, context) => {
      const user = await userModel.findOne({ _id: lider });
      console.log(user);
      return user;
    },
    avances: async ({ _id }, args, context) => {
      const advancements = await advancementModel.find({ proyecto: _id });
      return advancements;
    },
    inscripciones: async ({ _id }, args, context) => {
      const inscripctions = await inscriptionModel.find({ proyecto: _id });
      return inscripctions;
    },
  },
  Query: {
    Proyectos: async (parent, { filter }, context) => {
      const filtrado = {};
      if (filter) {
        filtrado = filter;
      }
      const projects = await projectModel.find(filtrado);
      return projects;
    },
    Proyecto: async (parent, { _id }) => {
      const proyecto = await projectModel.findOne({ _id });
      return proyecto;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyecto = await projectModel.create({ ...args });
      return proyecto;
    },
    eliminarProyecto: async (parent, { _id }) => {
      console.log("ENTRE A ELIMINAR PROYECTO")
      const proyecto = await projectModel.findOneAndDelete({ _id });
      const inscripciones = await inscriptionModel.deleteMany({
        proyecto: proyecto._id,
      });
      console.log(inscripciones);
      const avances = await advancementModel.deleteMany({
        proyecto: proyecto._id,
      });
      console.log(avances);
      return proyecto;
    },
    editarProyecto: async (parent, { _id, body }) => {
      const proyecto = await projectModel.findOneAndUpdate(
        { _id },
        { ...body },
        { runValidators: true, new: true }
      );
      return proyecto;
    },
  },
};
