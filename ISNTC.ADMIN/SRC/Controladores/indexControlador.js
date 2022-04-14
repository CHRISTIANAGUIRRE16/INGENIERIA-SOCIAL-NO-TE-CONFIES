const indexctl={}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

indexctl.mostrar=(req,res)=>{
    res.render("index");
}

module.exports=indexctl