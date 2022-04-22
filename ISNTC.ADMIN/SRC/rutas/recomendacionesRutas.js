const express = require('express');
const rutas=express.Router()

const {mostrar}=require("../Controladores/recomendacionesControlador")

rutas.get('/recomendacionesAgregar/', mostrar)


module.exports= rutas