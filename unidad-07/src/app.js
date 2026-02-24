import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path'
import __dirname from './utils/dirname.js';

import viewsRouter from './routes/views.router.js'
import userRouter from './routes/users.router.js';
import { Server } from 'socket.io'

import { connectMongo } from './db/mongo.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
const URI_DB = 'mongodb://localhost:27017';
const DB_NAME ='coders';

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine() );
app.set('views', __dirname, 'views' );
app.set('view engine', 'handlebars');

app.set("views", path.join(__dirname, "views"));
app.use('/', viewsRouter);
app.use('/api/users', userRouter);


await connectMongo(URI_DB, DB_NAME);

const httpServer = app.listen(PORT, () => { console.log(`Servidor con Express en el puerto ${PORT}`) })

const io = new Server(httpServer);

io.on('connection',  socket => {
    console.log('Nuevo cliente conectado con el id ' + socket.id );
})

