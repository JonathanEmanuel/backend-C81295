import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path'
import { fileURLToPath } from 'url'
import viewsRouter from './routes/views.router.js'

import { Server } from 'socket.io'

import { connectMongo } from './db/mongo.js';
const __filename = fileURLToPath( import.meta.url);
const __dirname = path.dirname( __filename);

const app = express();
const PORT = 8080;
const URI_DB = 'mongodb://localhost:27017';
const DB_NAME ='coders';

await connectMongo(URI_DB, DB_NAME);

app.engine('handlebars', handlebars.engine() );
app.set('views', path.join(__dirname, 'views' ) );
app.set('view engine', 'handlebars');

app.use( '/', express.static('public') );


app.use('/', viewsRouter);

const httpServer = app.listen(PORT, () => { console.log(`Servidor con Express en el puerto ${PORT}`) })

const io = new Server(httpServer);

io.on('connection',  socket => {
    console.log('Nuevo cliente conectado con el id ' + socket.id );
})

