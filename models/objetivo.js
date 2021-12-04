import { Schema, model } from "mongoose";
import {projectModel} from './project.js';

const objectiveSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'debe proporcionar la descripcion de los objetivos'],
    },
    tipo: {
        type: String,
        required: [true, 'debe proporcionar el tipo de proyecto'],
        enum: ["GENERAL", "ESPECIFICO"],
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        required: [true, 'debe proporcionar el proyecto al cual pertenece el objetivo'],
        ref: projectModel,
    }

})

export const objectiveModel = model('Objective', objectiveSchema, 'objetivo');