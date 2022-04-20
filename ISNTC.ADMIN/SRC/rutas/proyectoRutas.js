const express = require('express');
const rutas=express.Router()

const { mostrar, enviar, lista, traer, editar }=require("../Controladores/proyectoControlador")

rutas.get('/proyectoAgregar/', mostrar)
rutas.post('/proyectoAgregar/', enviar)
rutas.get('/proyectoEditar/:id', traer)
rutas.post('/proyectoEditar/:id', editar)
rutas.get('/proyectoLista/:id', lista)

module.exports= rutas