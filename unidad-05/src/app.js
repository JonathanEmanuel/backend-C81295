import express from 'express'
import handlebars from 'express-handlebars'
import usersRouter from './routes/users.router.js'


const app = express();
// Middleware -> Lo tratamos en las proximas clases
app.use( express.json() );
app.use( express.urlencoded({extended:true}) )

const PORT = 8080;

app.engine('handlebars', handlebars.engine() );
app.set('views', '/views');
app.set('view engine', 'handlebars');

app.use( '/', express.static('public') );

app.get('/', (req, res) => {
    let data = {
        title: 'Home',
        name: 'Lucas'
    }

    res.render('index, data')
})

app.use('/api/users', usersRouter);



app.listen(PORT, () => { console.log(`Servidor con Express en el puerto ${PORT}`) })
