import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversUsuario } from "../models/usuario/resolvers";
import { resolversAvance } from '../models/avance/resolvers.js';
import { resolverInscripciones } from '../models/inscripcion/resolvers.js';

export const resolvers = [ resolversUsuario, resolversProyecto, resolversAvance, resolverInscripciones ];


