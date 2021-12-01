import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enums/enums";
import {projectModel} from './project';

interface Objective{
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    proyecto: Schema.Types.ObjectId;
};

const objectiveSchema = new Schema<Objective>({
    descripcion: {
        type: String,
        required: [true, 'debe proporcionar la descripcion de los objetivos'],
    },
    tipo: {
        type: String,
        required: [true, 'debe proporcionar el tipo de proyecto'],
        enum: Enum_TipoObjetivo,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        required: [true, 'debe proporcionar el proyecto al cual pertenece el objetivo'],
        ref: projectModel,
    }

})

export const objectiveModel = model('Objective', objectiveSchema, 'objetivo');