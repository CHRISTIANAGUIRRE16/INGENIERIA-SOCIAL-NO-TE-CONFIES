const express = require('express');
const rutas=express.Router()

const { mostrar, enviar, lista, traer, editar }=require("../Controladores/experienciasControlador")

rutas.get('/experienciasAgregar/', mostrar)


module.exports= rutas