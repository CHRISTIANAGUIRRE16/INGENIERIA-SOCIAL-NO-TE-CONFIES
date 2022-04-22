const comentariosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

comentariosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idComentarios) from comentarios")
    res.render("comentarios/comentariosAgregar", { idMax });
}

comentariosControlador.enviar=async(req,res)=>{
    const id = req.user.idUsuarios
    const{idComentarios,comentarios}=req.body
}

module.exports=comentariosControlador