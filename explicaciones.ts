import conectarBD from './db/db';
import { ProyectoModel } from './models/project';
import { UserModel } from './models/user';

import { Enum_Rol, Enum_FaseProyecto, Enum_EstadoProyecto, Enum_EstadoInscripcion, Enum_TipoObjetivo } from './models/enums';

const main = async () => {
    await conectarBD();

    // CRUD PROYECTOS
     /*
    //CREAR UN PROYECTO
    await ProyectoModel.create({
        nombre: "prueba0",
        objetivos: [
            { descripcion: 'prueba1', tipo: Enum_TipoObjetivo.general },
            { descripcion: 'prueba2', tipo: Enum_TipoObjetivo.especifico },
            { descripcion: 'prueba3', tipo: Enum_TipoObjetivo.especifico },
        ],
        presupuesto: "123",
        fechaInicio: Date.now(),
        fechaFin: new Date('2021/11/20'),
        lider: "619fde2fef448a2bc324a6e9",
        estado: Enum_EstadoProyecto.activo,
        fase: Enum_FaseProyecto.desarrollo,
        inscripciones: "619993b47e8af97429cb4835",
        avances: "619994087e8af97429cb4836",
    })
        .then((u) => {
            console.error('proyecto creado', u)
        })
        .catch((e) => {
            console.error('Error creando proyecto', e)
        });
  
    //OBTENER LOS PROYECTOS
    const proyecto = await ProyectoModel.find({ nombre: 'prueba8' }).populate('lider').populate('inscripciones').populate('avances');
    console.log('El proyecto es: ', proyecto)

       // EDITAR UN PROYECTO
       await ProyectoModel.findOneAndUpdate({
           nombre: 'prueba'
       }, {
           nombre: 'prueba1',
           objetivos: 'prueba1'
       })
           .then((u) => {
               console.error('proyecto actualizado', u)
           })
           .catch((e) => {
               console.error('Error actualizando proyecto', e)
           });
   
   
       //ELIMINAR PROYECTO
       await ProyectoModel.findOneAndDelete({ nombre: 'prueba1' })
           .then((u) => {
               console.error('proyecto eliminado', u)
           })
           .catch((e) => {
               console.error('Error eliminando proyecto', e)
           }); 
           
           */
   
       // CRUD USUARIOS
   
       // CREAR USUARIO
       UserModel.create({
           nombre: "edier",
           apellido: "Aristizabal",
           identificacion: "8525287",
           rol: Enum_Rol.lider,
           correo: "ans@gmail.com",
       })
           .then((u) => {
               console.log('usuario creado', u);
           })
           .catch((e) => {
               console.error('Error creando el usuario', e);
           });
   /*
       //OBTENER LOS USUARIOS
       await UserModel.find().then((u)=>{
           console.log('usuarios',u);
       }).catch(e=>{
           console.error('error obteniendo los usuarios',e);
       })  
   
       //OBTENER UN SOLO USUARIO
       await UserModel.findOne({identificacion:"10203050"})
       .then((u)=>{
           console.log('usuario encontrado',u);
       })
       .catch((e)=>{
           console.error(e);
       });
   
       //EDITAR UN USUARIO
           await UserModel.findOneAndUpdate(
           {correo:'miguel@hotmail.com'},
           {
           nombre:'juan',
       }).then((u)=>{
           console.log('usuario actualizado',u);
   
       }).catch(e=>{
           console.error('error actualizando',e)
       });
   
       //ELIMINAR USUARIO
       await UserModel.findOneAndDelete({correo:'miguel@hotmail.com'})
       .then((u)=>{
           console.log('usuario eliminado',u);
       })
       .catch((e)=>{
           console.error(e);
       });
       
       */

};
main();
