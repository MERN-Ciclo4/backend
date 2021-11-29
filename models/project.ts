import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto } from "./enums";
import { objectiveModel } from "./objective";
import { userModel } from "./user";

interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objetivos: [Schema.Types.ObjectId];
}

const projectSchema = new Schema<Project>({
  nombre: {
    type: String,
    require: [true, "debe proporcionar el nombre del proyecto"],
  },
  presupuesto: {
    type: Number,
    required: [true, "debe proporcionar el presupuesto del proyecto"],
  },
  fechaInicio: {
    type: Date,
    required: [true, "debe proporcionar la fecha de inicio del projecto"],
  },
  fechaFin: {
    type: Date,
    required: [true, "debe proporcionar la fecha fin del projecto"],
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.Inactivo,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.Nulo,
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: [true, "debe proporcionar un lider"],
    ref: userModel,
  },
  objetivos: [
    {
      type: Schema.Types.ObjectId,
      ref: objectiveModel,
    },
  ],
});

export const projectModel = model("Project", projectSchema, "proyecto");
