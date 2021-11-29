export const resolvers = {
  Query: {
    Usuarios: async () => {
      const usuarios = [
        {
          nombre: "Daniel",
        },
        {
          nombre: "Juan",
        },
        {
          nombre: "Pedro",
        },
      ];
      return usuarios;
    },
  },
};
