const express = require('express');
const rutas=express.Router()

const { mostrar}=require("../Controladores/forosControlador")

rutas.get('/forosAgregar/', mostrar)


module.exports= rutas
