const recomendacionesControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

recomendacionesControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idRecomendaciones) from recomendaciones")
    res.render("recomendaciones/recomendacionesAgregar", { idMax });
}

recomendacionesControlador.enviar=async(req,res)=>{
    const id = req.user.idRecomendaciones
    const{idRecomendaciones, recomendaciones,descripcion }=req.body 
}

module.exports=recomendacionesControlador