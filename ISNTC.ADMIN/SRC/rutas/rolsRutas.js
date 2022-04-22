const express = require('express');
const rutas=express.Router()

const { mostrar}=require("../Controladores/rolsControlador")

rutas.get('/rolsAgregar/', mostrar)


module.exports= rutas