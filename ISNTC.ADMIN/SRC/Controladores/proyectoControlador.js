const proyectoControlador={}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

proyectoControlador.mostrar=(req,res)=>{
    res.render("proyecto/proyectoAgregar");
}

module.exports= proyectoControlador