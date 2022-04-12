const express = require('express');
const rutas=express.Router()

const { mostrar }=require("../Controladores/indexControlador")

rutas.get("/",mostrar)

module.exports= rutas
