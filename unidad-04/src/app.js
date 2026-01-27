import express from 'express'
const app = express();
const PORT = 8080;

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


app.listen(PORT, () => {
    console.log(`Servidor con Express en el puerto ${PORT}`);
})
