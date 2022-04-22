const express = require('express');
const rutas=express.Router()

const { mostrar}=require("../Controladores/conferenciasControlador")

rutas.get('/conferenciasAgregar/', mostrar)


module.exports=rutas