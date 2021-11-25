import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(process.env.DATABASE_URL)
        .then(() => {
            console.log('conexión exitosa');
        })
        .catch((e) => {
            console.log('conexión erronea', e);
        });
};

export default conectarBD;
