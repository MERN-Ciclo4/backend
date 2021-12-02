import mongoose from "mongoose";
import { projectModel } from "../proyecto/proyecto.js";
import { userModel } from "../usuario/usuario.js";
const { Schema, model } = mongoose;
const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"],
    default: "PENDIENTE",
  },
  fechaIngreso: {
    type: Date,
    // required: [true, "debe proporcionar la fecha de ingreso de su inscripcion"],
  },
  fechaEgreso: {
    type: Date,
    // required: [true, "debe proporcionar la fecha de egreso de su inscripcion"],
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    required: [
      true,
      "debe proporcionar el proyecto al cual pertence su inscripcion",
    ],
    ref: projectModel,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    required: [
      true,
      "debe proporcionar el estudiante al cual pertenece su inscripcion",
    ],
    ref: userModel,
  },
});

export const inscriptionModel = model(
  "Inscription",
  inscriptionSchema,
  "inscripcion"
);
