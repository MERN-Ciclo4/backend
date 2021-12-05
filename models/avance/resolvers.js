import { projectModel } from "../proyecto/proyecto.js";
import { userModel } from "../usuario/usuario.js";
import { advancementModel } from "./avance.js";

export const advancementResolvers = {
  Avance: {
    proyecto: async ({ proyecto }, args) => {
      const project = await projectModel.findOne({ _id: proyecto });
      return project;
    },
    creadoPor: async ({creadoPor}, args) => {
      const user = await userModel.findOne({ _id: creadoPor });
      return user;
    },
  },
  Query: {
    Avances: async (parent, { filter }, context) => {
      const filtrado = {};
      if (filter) {
        filtrado = filter;
      }
      const avances = await advancementModel.find(filtrado);
      return avances;
    },
    Avance: async (parent, { _id }) => {
      const avances = await advancementModel.findOne({ _id });

      return avances;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const avance = await advancementModel.create({ ...args });
      return avance;
    },
    eliminarAvance: async (parent, { _id }) => {
      const avance = await advancementModel.findOneAndDelete({ _id });
      return avance;
    },
    editarAvance: async (parent, { _id, body }) => {
      const avance = await advancementModel.findOneAndUpdate(
        { _id },
        { ...body },
        {
          runValidators: true,
          new: true,
        }
      );
      return avance;
    },
  },
};
