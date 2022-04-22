const comentariosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

comentariosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idComentarios) from comentarios")
    res.render("comentarios/comentariosAgregar", { idMax });
}



module.exports=comentariosControlador