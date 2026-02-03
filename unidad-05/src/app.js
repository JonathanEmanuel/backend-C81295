import express from 'express'
import usersRouter from './routes/users.router.js'


const app = express();
// Middleware -> Lo tratamos en las proximas clases
app.use( express.json() );
app.use( express.urlencoded({extended:true}) )

const PORT = 8080;

app.use( '/', express.static('public') );
app.use('/api/users', usersRouter);



app.listen(PORT, () => { console.log(`Servidor con Express en el puerto ${PORT}`) })
