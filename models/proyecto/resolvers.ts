import { projectModel } from "./proyecto";

export const projectResolvers = {
  Query: {
    Proyectos: async () => {
      const projects = await projectModel.find({}).populate("lider");
      return projects;
    },
    FiltrarProyecto: async (parent, { params }) => {
      const proyecto = await projectModel.find({ ...params });
      return proyecto;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyecto = await projectModel.create({ ...args });
      return proyecto;
    },
    eliminarProyecto: async (parent, { _id }) => {
      const proyecto = await projectModel.findOneAndDelete({ _id });
      return proyecto;
    },
    editarProyecto: async (parent, { _id, body }) => {
      const proyecto = await projectModel.findOneAndUpdate(
        { _id },
        { ...body },
        { runValidators: true, new: true }
      );
      return proyecto;
    },
  },
};
