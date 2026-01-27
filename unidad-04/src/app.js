import express from 'express'
import UsersManager from './UsersManger.js';

const manager = new UsersManager()
const app = express();
// Middleware -> Lo tratamos en las proximas clases
app.use( express.json());
const PORT = 8080;

const users = [
  {
    id: 1,
    name: "Maria",
    email: "maria@code.edu.ar"
  },
  {
    id: 2,
    name: "Marcos",
    email: "marcos@coder.edu.ar"
  },
  {
    id: 3,
    name: "Rocio",
    email: "rocio@coder.edu.ar"
  }
]
// Retornamos todos lo usuarios
app.get('/api/users', (req, res) => {
    res.json({ status: 'success', data: users})
})

// Retornamos un usuario por id
app.get('/api/users/:id', (req, res) => {
     const { id }= req.params;
    const user = users.find( item => item.id == id);
    if( user) {
        res.json({
            status: 'success',
            data: user
        })
    }else {
        res.status(404).json({
            status: 'success',
            msg: 'Recurso no encontrado'
        })
    }
})

// Guardamos un usuario
app.post('/api/users', (req, res) => {
    const {name, email} = req.body;

    const id =  users.length + 1;
    users.push({
        id,
        name,
        email
    })
    res.json({ status: 'success', data: {id}})
})

// Eliminamos un usuario
app.delete('/api/users/:id', (req, res) => {
    const { id }= req.params;
    const index = users.findIndex( item => item.id == id);
    if( index != -1 ) {
        users.splice( index, 1);
        res.json({
            status: 'success'
        })
    }else {
        res.status(404).json({
            status: 'success',
            msg: 'Recurso no encontrado'
        })
    }
})


const usuarios = [
  {
    id: 1,
    firtsName: "Maria",
    lastName: "Ruiz",
    userName: "sofi"
  },
  {
    id: 2,
    firtsName: "Marcos",
    lastName: "Herrera",
    userName: "mark"
  },
  {
    id: 3,
    firtsName: "Marcos",
    lastName: "Herrera",
    userName: "mark"
  }
]


app.get('/', (request, response) => {
    response.send('<h1>Hola desde Express 💻</h1>')
})



app.get('/bienvenida', (req, res) => {
    let { letra } = req.query;
    res.send(`
            <h4 style="color: teal"> Bienvenido Usuario </h4>
            <p><strong>letra:</strong> ${letra} </p>
            `);
})


app.get('/usuario', (req, res) => {
    const usuario = {
        name: 'Pepe',
        email: 'pepe@code.edu.ar'
    }
    res.json( usuario )
})

app.get('/usuario/:id', (req, res) => {
    const { id }= req.params;
    const user = usuarios.find( item => item.id == id);
    if( user) {
        res.json({
            status: 'success',
            data: user
        })
    }else {
        res.status(404).json({
            status: 'success',
            msg: 'Recurso no encontrado'
        })
    }

})


app.listen(PORT, () => { console.log(`Servidor con Express en el puerto ${PORT}`) })
