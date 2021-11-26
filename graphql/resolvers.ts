const resolvers = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = [
                {
                    nombre: 'Daniel',
                },
                {
                    nombre: 'edier',
                },
            ];
            return usuarios;
        },
    },
    /* 
 
    Mutation:{
 
    } */

};

export { resolvers };
