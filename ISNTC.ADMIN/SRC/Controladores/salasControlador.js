const salasControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

salasControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idSalas) from salas")
    res.render("salas/salasAgregar", { idMax });
}

module.exports=salasControlador