import { advancementModel } from "./avance.js";

export const advancementResolvers = {
  Query: {
    Avances: async () => {
      const avances = await advancementModel
        .find({})
        .populate("creadoPor")
        .populate("proyecto");
      return avances;
    },
    FiltrarAvance: async (parent, { params }) => {
      const avances = await advancementModel
        .find({ ...params })
        .populate("creadoPor")
        .populate("proyecto");
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
