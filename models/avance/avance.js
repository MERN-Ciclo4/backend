import mongoose from "mongoose";
import { projectModel } from "../proyecto/proyecto.js";
import { userModel } from "../usuario/usuario.js";
const { Schema, model } = mongoose;

const advancementSchema = new Schema({
  descripcion: {
    type: String,
    required: [true, "debe proporcionar una descripcion del avance"],
  },
  observaciones: [
    {
      type: String,
    },
  ],
  fecha: {
    type: Date,
    required: [true, "debe proporcionar la fecha del avance"],
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    required: [
      true,
      "debe proporcionar el proyecto al cual pertenece este avance.",
    ],
    ref: projectModel,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    required: [true, "debe proporcionar el usuario creador de este avance."],
    ref: userModel,
  },
});

export const advancementModel = model(
  "Advancement",
  advancementSchema,
  "avance"
);
