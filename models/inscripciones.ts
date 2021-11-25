import {Schema, model, Date} from 'mongoose';
import {Enum_EstadoInscripcion} from './enums';

interface Inscription{
    proyecto:string;
    estudiante:string;
    estado:Enum_EstadoInscripcion;
    fechaIngreso: string;
    fechaEgreso: string;
}

const InscriptionSchema = new Schema<Inscription>({
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.pendiente,
        required: true,
    },

    fechaIngreso: {
        type: String,
        required: true,
    },
    
    fechaEgreso: {
        type: String,
        required: true,
    },

    proyecto: {
        type: String,
        required: true,
    },

    estudiante: {
        type: String,
        required: true,
    },

});

const InscriptionModel = model('Inscripcion', InscriptionSchema, 'inscripciones');

export {InscriptionModel}
