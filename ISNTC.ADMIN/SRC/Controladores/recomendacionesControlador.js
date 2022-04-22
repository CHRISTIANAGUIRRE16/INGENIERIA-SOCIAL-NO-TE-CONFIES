const recomendacionesControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

recomendacionesControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idRecomendaciones) from recomendaciones")
    res.render("recomendaciones/recomendacionesAgregar", { idMax });
}


module.exports=recomendacionesControlador