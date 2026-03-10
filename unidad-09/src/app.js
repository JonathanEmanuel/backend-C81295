import express from 'express'
import mongoose from 'mongoose';

import usersRouter from './routes/users.router.js'
import courseRouter from './routes/course.router.js'
const PORT =  5000;
const URI_DB = 'mongodb://localhost:27017/c81295';

mongoose.connect(URI_DB).then( () => {
    console.log('Conexión con MongoDB');
}).catch( error => {
    console.error('No se pudo conectar con la Base de Datos');
})

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/course', courseRouter);

app.listen( PORT, () => {
    console.log(`Servidor Web en el puerto ${PORT}`);
})
