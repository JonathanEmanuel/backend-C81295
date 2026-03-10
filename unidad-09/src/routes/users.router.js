import { Router } from 'express'
import { userModel } from '../models/users.model.js';
const router = Router();



// Retornamos todos lo usuarios
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.json({ status: 'success', payload: users})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al obtener los usuarios'})
    }
})

router.get('/filtro', async (req, res) => {
    try {
        const users = await userModel.find({ name: 'Jose'});
        res.json({ status: 'success', payload: users})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al obtener los usuarios'})
    }
})


// Retornamos un usuario por id -> Falta implementar
router.get('/:id', async (req, res) => {
    const { id }= req.params;
    try {
        const user = await userModel.findById(id);
        if( user) {
            res.json({
                status: 'success',
                payload: user
            })
        }else {
            res.status(404).json({
                status: 'success',
                msg: 'Recurso no encontrado'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al obtener el usuario'})
    }

})
// Actualizamos el usuario
router.put('/:id', async (req, res) => {
    try {
        const { id} = req.params;
        const { name, email, foto} = req.body;

        const result = await userModel.findByIdAndUpdate(id, {name, email, foto}, { new: true});
        res.json({ status: 'success', payload: result})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al actualizar el usuario'});
    }
})

// Guardamos un usuario
router.post('/',  async (req, res) => {
    try {
        const { name, email, foto} = req.body;

        const userExisted = await userModel.findOne({ email})
        if(userExisted){
           return res.status(400).json({ status: 'error', msg: 'El email ya está registrado'});
        }

        if( !name || !email){
           return res.status(400).json({ status: 'error', msg: 'Faltan campos Obligatorios'})
        }

        const user = await userModel.create({ name, email, foto});
        res.json({ status: 'success', payload: user})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al crear el usuario'});
    }
   
})

// Eliminamos un usuario -> Falta implementar
router.delete('/:id', async (req, res) => {

    try {
        const { id }= req.params;
        const result = await userModel.findByIdAndDelete(id);
        if( result ) {
            res.json({
                status: 'success',
                msg: 'Usuario eliminado'
            })
        }else {
            res.status(404).json({
                status: 'error',
                msg: 'No encontrado el Usuario'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al elmininar el usuario'});
    }
   
})

router.post('/:id/course', async( req, res) => {
     try {
        const { id } = req.params;
        const { course } = req.body;

        const user = await userModel.findById(id);
        user.courses.push({
            course: course
        })

        const result = await userModel.findByIdAndUpdate( id, user )
        res.json({ status: 'success', payload: result})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al actualizar el usuario'});
    }
})

router.get('/:id/course', async( req, res) => {
    try {
        const { id} = req.params;
        
        const result = await userModel.findById(id).populate('courses.course');
        console.log(result);
        res.json({ status: 'success', payload: result})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor obtener los cursos el usuario'});
    }
})

export default router