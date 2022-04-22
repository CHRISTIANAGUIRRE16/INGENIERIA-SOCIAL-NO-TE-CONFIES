const rolsControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

rolsControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idRols) from rols")
    res.render("rols/rolsAgregar", { idMax });
}

module.exports=rolsControlador