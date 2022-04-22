const experienciasControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

experienciasControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idExperiencias) from experiencias")
    res.render("experiencias/experienciasAgregar", { idMax });
}

module.exports=experienciasControlador