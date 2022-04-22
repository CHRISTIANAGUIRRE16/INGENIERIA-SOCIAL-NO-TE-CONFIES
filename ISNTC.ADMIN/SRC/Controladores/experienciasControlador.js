const experienciasControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

experienciasControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idExperiencias) from experiencias")
    res.render("experiencias/experienciasAgregar", { idMax });
}

experienciasControlador.enviar=async(req,res)=>{
    const id = req.user.idExperiencias
    const{idExperiencias,temaExperiencias,fechaExperiencias,detalleExperiencias}=req.body
}
module.exports=experienciasControlador