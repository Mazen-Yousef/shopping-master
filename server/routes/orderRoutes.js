
const express = require('express');
const router = express.Router();
const Order = require("../models/orderModel");


router.get('/api/orders', async(req,res)=>{
    const orders = await Order.find();
    res.send(orders)

}) ;


router.post('/api/orders', async(req,res)=>{
    const order = await Order(req.body).save();
    res.send(order)

}) ;


router.delete('/api/orders/:id', async(req,res)=>{
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    res.send(deleteOrder)

}) ;


module.exports = router