const express = require('express');
const rutas=express.Router()

const { mostrar}=require("../Controladores/consejosControlador")

rutas.get('/consejosAgregar/', mostrar)


module.exports= rutas