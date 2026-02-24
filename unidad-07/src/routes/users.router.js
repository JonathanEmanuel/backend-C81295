import express from 'express'
import { getDb } from '../db/mongo.js';
const router = express.Router();

const collection = () => { 
    return getDb().collection('estudiantes'); 
}

// Retornamos todos lo usuarios
router.get('/', async (req, res) => {
console.log(collection)
   
    const students = await collection.find().toArray();
    console.log(students)
    res.json({ status: 'success', payload: students})
})

// Retornamos un usuario por id -> Falta implementar
router.get('/:id', (req, res) => {
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
router.post('/',  async (req, res) => {
    
    if( !req.file){
        return res.status(400).json({ status: 'error', error: 'No se se guardo el archivo'})
    }

    //console.log( req.file )
    const avatar = req.file.path;

    const {name, email, password} = req.body;
    const data = await manager.createUser({ name, email, password, avatar})

    res.json({ status: 'success', data})
})

// Eliminamos un usuario -> Falta implementar
router.delete('/:id', (req, res) => {
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




export default router