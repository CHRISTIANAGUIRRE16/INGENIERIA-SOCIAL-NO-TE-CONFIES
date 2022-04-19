const express = require('express');
const rutas=express.Router()

const { mostrar }=require("../Controladores/proyectoControlador")

rutas.get('/agregar/', enseñar)

module.exports= rutas