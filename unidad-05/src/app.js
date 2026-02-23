import express from 'express'
import handlebars from 'express-handlebars'
import usersRouter from './routes/users.router.js'
import path from 'path'
import { fileURLToPath} from 'url'

const __filename = fileURLToPath( import.meta.url);
const __dirname = path.dirname( __filename);

const app = express();
// Middleware -> Lo tratamos en las proximas clases
app.use( express.json() );
app.use( express.urlencoded({extended:true}) )

const PORT = 8080;

app.engine('handlebars', handlebars.engine() );
app.set('views', path.join(__dirname, 'views' ) );
app.set('view engine', 'handlebars');

app.use( '/', express.static('public') );

app.get('/home', (req, res) => {
    const isAdmin = false;
    let data = {
        title: 'Home',
        user: {
            name: 'José',
            email: 'jose@code.edu.ar',
            isAdmin
        },
        products: [
            { id: 1, title: '🍐', price: 20},
            { id: 2, title: '🍎', price: 30 },
            { id: 3, title: '🍊', price: 10 }
        ]
    }

    res.render('index', data)
})

app.get('users',(req, res) => {
    
} )


app.use('/api/users',  usersRouter);




app.listen(PORT, () => { console.log(`Servidor con Express en el puerto ${PORT}`) })
