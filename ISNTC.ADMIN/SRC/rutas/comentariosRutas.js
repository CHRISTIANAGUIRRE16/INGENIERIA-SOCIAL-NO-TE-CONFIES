const express = require('express');
const rutas=express.Router()

const { mostrar}=require("../Controladores/comentariosControlador")

rutas.get('/comentariosAgregar/', mostrar)
rutas.post('/comentariosLista/', enviar)
rutas.get('/comentariosEditar/', traer)



module.exports= rutas