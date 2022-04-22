const forosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

forosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idForos) from foros")
    res.render("foros/forosAgregar", { idMax });
}

forosControlador.enviar=async(req,res)=>{
    const id = req.user.idForos
    const{idForos,temaForo,fecha,horaFin,comentariosDetalleForo}=req.body
}
module.exports=forosControlador