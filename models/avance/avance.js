import {Schema, model} from 'mongoose';

interface Avance{
    fecha: string;
    descripcion: string;
    observaciones: [string];
    proyecto: string;
    creadoPor: string;
}

const avanceSchema = new Schema<Avance>({
    fecha: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    observaciones: [
        {
        type: String,
        },
    ],
    proyecto: {
        type: String,
        required: true,
    },
    creadoPor: {
        type: String,
        required: true,
    },
});

const ModeloAvance = model('Avance', avanceSchema, 'avances');


export { ModeloAvance };
