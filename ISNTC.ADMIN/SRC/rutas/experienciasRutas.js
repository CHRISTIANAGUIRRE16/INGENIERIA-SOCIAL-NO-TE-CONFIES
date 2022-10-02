const express = require('express');
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, eliminar }= require('../controladores/experienciaControlador')
const { isLoggedIn } = require('../lib/auth')

rutas.get('/experienciasAgregar/:id', isLoggedIn, mostrar)
rutas.post('/experienciasAgregar/:id', isLoggedIn, mandar)
rutas.get('/experienciasLista/:id', isLoggedIn, lista)
rutas.get('/experienciasEditar/:id', isLoggedIn, traer)
rutas.post('/experienciasEditar/:id', isLoggedIn, actualizar)
rutas.get('/eliminar/:id', isLoggedIn, eliminar)

module.exports= rutas