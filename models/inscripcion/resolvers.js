import { inscriptionModel } from "./inscripcion.js";

export const inscriptionResolver = {
  Query: {
    Inscripciones: async () => {
      const inscripciones = await inscriptionModel
        .find({})
        .populate("proyecto")
        .populate("estudiante");
      return inscripciones;
    },
    FiltrarInscripcion: async (parent, { params }) => {
      const inscripcion = await inscriptionModel.find({ ...params });
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
