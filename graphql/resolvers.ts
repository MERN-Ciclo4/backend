import { advancementResolvers } from "../models/avance/resolvers";
import { inscriptionResolver } from "../models/inscripcion/resolvers";
import { projectResolvers } from "../models/proyecto/resolvers";
import { userResolvers } from "../models/usuario/resolvers";

export const resolvers = [
  userResolvers,
  projectResolvers,
  inscriptionResolver,
  advancementResolvers,
];
