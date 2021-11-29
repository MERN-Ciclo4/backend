import { Schema, model } from "mongoose";
import { Enum_EstadoUsuario, Enum_Rol } from "./enums";
interface User {
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
}
const userSchema = new Schema<User>({
  correo: {
    type: String,
    required: [true, "debe proporcionar el email"],
    unique: true,
    validate: {
      // validator: (email) => {
      //   if (email.includes("@") && email.includes(".")) {
      //     return true;
      //   }
      //   return false;
      // },
      validator: (email) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
      message: "el formato del email no es válido",
    },
  },
  identificacion: {
    type: String,
    required: [true, "debe proporcionar la identificacón del usuario"],
    unique: true,
  },
  nombre: {
    type: String,
    required: [true, 'debe proporcionar el nombre del usuario'],
  },
  apellido: {
    type: String,
    required: [true, 'debe proporcionar el apellido del usuario'],
  },
  rol: {
    type: String,
    required: [true, 'debe proporcionar un rol del usuari'],
    enum: Enum_Rol,
  },
  estado: {
    type: String,
    default: Enum_EstadoUsuario.Pendiente,
    enum: Enum_EstadoUsuario,
  },
});

export const userModel = model("User", userSchema, 'usuario');
