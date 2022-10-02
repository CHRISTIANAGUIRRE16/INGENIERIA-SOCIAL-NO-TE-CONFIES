const express = require('express');
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, eliminar }= require('../controladores/recomendacionesControlador')
const { isLoggedIn } = require('../lib/auth')

rutas.get('/recomendacionesAgregar/:id', isLoggedIn, mostrar)
rutas.post('/recomendacionesAgregar/:id', isLoggedIn, mandar)
rutas.get('/recomendacionesLista/:id', isLoggedIn, lista)
rutas.get('/recomendacionesEditar/:id', isLoggedIn, traer)
rutas.post('/recomendacionesEditar/:id', isLoggedIn, actualizar)
rutas.get('/eliminar/:id', isLoggedIn, eliminar)

module.exports= rutas