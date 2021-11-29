import { Schema, model } from "mongoose";
import { projectModel } from "./project";
import { userModel } from "./user";

interface Advancement {
  descripcion: string;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId;
  fecha: Date;
}

const advancementSchema = new Schema<Advancement>({
  descripcion: {
    type: String,
    required: [true, "debe proporcionar una descripcion del avance"],
  },
  observaciones: [{
    type: String,
  }],
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

export const advancementModel = model("Advancement", advancementSchema, "avance");
