import { Router } from 'express'
import { orderModel } from '../models/order.model.js';
const router = Router();

router.get('/', async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.json({ status: 'success', payload: orders})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al obtener las ordenes'})
    }
})


router.post('/',  async (req, res) => {
    try {
        const { name, size, price, quantity, date } = req.body;

        if( !name || !price){
           return res.status(400).json({ status: 'error', msg: 'Faltan campos Obligatorios'})
        }

        const orders = await orderModel.create({ name, size, price, quantity, date});
        res.json({ status: 'success', payload: orders})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al crear la Orden'});
    }
})

router.get('/reporte', async (req, res) => {
    try {
        const size = 'medium';

        const result = await orderModel.aggregate([
            { $match: { size: size}},
            { $group: {
                _id: '$name',
                totalQuantity: { $sum: "$quantity"}
            }},
            { $sort: { totalQuantity: -1}},
            {
                $group: { _id:1, orders: { $push: "$$ROOT"}}
            },
            {
                $project: {
                    _id: 0,
                    orders: "$orders"
                }
            },
            {
                $merge: {
                    into: 'reports'
                }
            }
        ])



        res.json({ status: 'success', payload: result})
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', msg: 'Error del servidor al obtener las ordenes'})
    }
})


export default router