const express = require('express');
const rutas=express.Router()

const { mostrar, login, mostrarRegistro, cerrar, registro }=require("../Controladores/loginControlador")

rutas.get("/login",mostrar)
rutas.post("/login",login)
rutas.get("/registro",mostrarRegistro)
rutas.post("/registro",registro) 
rutas.get("/cerrarSesion",cerrar)

module.exports= rutas
