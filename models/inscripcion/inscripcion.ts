import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "../enums/enums";
import { projectModel } from "../proyecto/proyecto";
import { userModel } from "../usuario/usuario";
interface Inscription {
  estado: Enum_EstadoInscripcion;
  fechaIngreso: Date;
  fechaEgreso: Date;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}
const inscriptionSchema = new Schema<Inscription>({
  estado: {
    type: String,
    required: [true, "debe proporcionar el estado de su inscripcion"],
    enum: Enum_EstadoInscripcion,
  },
  fechaIngreso: {
    type: Date,
    required: [true, "debe proporcionar la fecha de ingreso de su inscripcion"],
  },
  fechaEgreso: {
    type: Date,
    required: [true, "debe proporcionar la fecha de egreso de su inscripcion"],
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
