const forosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

forosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idForos) from foros")
    res.render("foros/forosAgregar", { idMax });
}

module.exports=forosControlador