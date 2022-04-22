const express = require('express');
const rutas=express.Router()

const { mostrar}=require("../Controladores/salasControlador")

rutas.get('/salasAgregar/', mostrar)


module.exports= rutas