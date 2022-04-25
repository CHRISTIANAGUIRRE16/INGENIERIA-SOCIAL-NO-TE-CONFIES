const express = require('express');
const rutas=express.Router()

const { mostrar,enviar, traer, editar, lista } = require('../Controladores/encuestaControlador');

rutas.get('/encuestaAgregar/', mostrar)
rutas.post('/encuestaAgregar/', enviar)
rutas.get('/encuestaEditar/:id', traer)
rutas.post('/encuestaEditar/:id', editar)
rutas.get('/encuestaLista/:id', lista)


module.exports= rutas