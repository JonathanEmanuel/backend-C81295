import { Router } from 'express'
import { courseModel } from '../models/course.mode.js';
const router = Router();

router.get('/', async (req, res) => {
    try {
        const course = await courseModel.find();
        res.json({ status: 'success', payload: course})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al obtener los cursos'})
    }
})


router.post('/',  async (req, res) => {
    try {
        const { title, description, foto} = req.body;

        const courseExisted = await courseModel.findOne({ title})
        if(courseExisted){
           return res.status(400).json({ status: 'error', msg: 'El Curso ya está Existe'});
        }

        if( !title || !description){
           return res.status(400).json({ status: 'error', msg: 'Faltan campos Obligatorios'})
        }

        const course = await courseModel.create({ title, description});
        res.json({ status: 'success', payload: course})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al crear el Curso'});
    }
   
})



export default router