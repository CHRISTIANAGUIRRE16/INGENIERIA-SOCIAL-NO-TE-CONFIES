const conferenciasControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

conferenciasControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idConferencia) from conferencias")
    res.render("conferencias/conferenciasAgregar", { idMax });
}

module.exports = conferenciasControlador
 