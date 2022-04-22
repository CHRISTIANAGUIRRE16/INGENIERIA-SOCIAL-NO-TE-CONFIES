const consejosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

consejosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idConsejos) from consejos")
    res.render("consejos/consejosAgregar", { idMax });
}

module.exports=consejosControlador