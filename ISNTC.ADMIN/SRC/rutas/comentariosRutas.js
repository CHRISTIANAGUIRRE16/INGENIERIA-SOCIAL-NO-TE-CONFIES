const express = require('express');
const rutas=express.Router()

const { mostrar}=require("../Controladores/comentariosControlador")

rutas.get('/comentariosAgregar/', mostrar)




module.exports= rutas