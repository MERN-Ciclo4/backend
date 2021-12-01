import { gql } from "apollo-server-express";
import { advancementTypes } from "../models/avance/types";
import { inscriptionTypes } from "../models/inscripcion/types";
import { projectTypes } from "../models/proyecto/types";
import { userTypes } from "../models/usuario/types";

const globalTypes = gql`
  scalar Date
`;

export const typeDefs = [
  globalTypes,
  userTypes,
  projectTypes,
  inscriptionTypes,
  advancementTypes,
];
