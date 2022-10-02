const express = require('express');
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, eliminar }= require('../controladores/comentariosControlador')
const { isLoggedIn } = require('../lib/auth')

rutas.get('/comentariosAgregar/:id', isLoggedIn, mostrar)
rutas.post('/comentariosAgregar/:id', isLoggedIn, mandar)
rutas.get('/comentariosLista/:id', isLoggedIn, lista)
rutas.get('/comentariosEditar/:id', isLoggedIn, traer)
rutas.post('/comentariosEditar/:id', isLoggedIn, actualizar)
rutas.get('/eliminar/:id', isLoggedIn, eliminar)

module.exports= rutas