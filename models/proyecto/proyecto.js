import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from '../enums/enums';
import { UserModel } from '../usuario/usuario';



interface Proyecto {
    nombre: string;
    objetivos: [{ descripcion: string; tipo: Enum_TipoObjetivo }];
    presupuesto: string;
    fechaInicio: Date;
    fechaFin: Date;
    lider: Schema.Types.ObjectId;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
}

const proyectoSchema = new Schema<Proyecto>({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    objetivos: [
        {
            descripcion: {
                type: String,
                required: true,
            },
            tipo: {
                type: String,
                enum: Enum_TipoObjetivo,
                required: true,
            },
        },
    ],
    presupuesto: {
        type: String,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
        ref: UserModel,
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },

    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        defaul: Enum_EstadoProyecto.INACTIVO,
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO,
    },
});

const ProyectoModel = model('Proyecto', proyectoSchema, 'proyectos');

export { ProyectoModel };
