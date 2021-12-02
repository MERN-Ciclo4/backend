import {Schema, model} from 'mongoose';
import {Enum_Rol , Enum_EstadoUsuario} from '../enums/enums';

interface user{
    correo:string,
    identificacion:string,
    nombre:string,
    apellido:string,
    rol:Enum_Rol,
    estado:Enum_EstadoUsuario;
    }

const userSchema = new Schema<user>({

    nombre:{
        type:String,
        required:true,
    },

    apellido:{
        type:String,
        required:true,
    },

    identificacion:{
        type:String,
        required:true,
        unique:true,
    },

    rol:{
        type:String,
        required:true,
        enum:Enum_Rol,
    },

    correo:{
        type:String,
        required: true,
        unique:true,
        validate:{
            validator:(email)=>{
                if(email.includes('@')&& email.includes('.')){
                    return true;
                }
                else{
                    return false;
                }

            },
            message:'el formato del correo electronico es incorrecto',
        },
    
    },
    
    estado:{
        type:String,
        enum:Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.PENDIENTE,
    }

    
});

const UserModel = model('User', userSchema, 'usuarios');

export {UserModel};
