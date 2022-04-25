const encuestaControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")
const path = require('path');

encuestaControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idEncuestas) from encuesta")
    res.render("encuesta/encuestaAgregar",{idMax});
}
encuestaControlador.enviar = async (req, res) => {
    const id = req.user.idUsuarios
    const {numero} = req.body
    const encuesta = req.files.encuestas
    const validacionEncuesta = path.extname(encuesta.name)
    const extensionArchivo = [".pdf", ".doc", ".docx", ".xls", ".xlsx"]
    if (!extensionArchivo.includes(validacionEncuesta)) {
        req.flash("success", "Tipo de archivo no compatible")

    }
    if (!req.files) {
        req.flash("success", "Archivo no insertado ")
    }
    const ubicacion = __dirname + "/../Public/encuestas/" + encuesta.name
    encuesta.mv(ubicacion, function (err) {
        if (err) {
            return res.status(500).send(err) 
        }
        sql.query("insert into encuesta (encuestas) values (?)", [encuesta.name])
    })
 res.redirect('/encuesta/encuestaLista/'+id);
}

encuestaControlador.lista = async (req, res) => {
    const id = req.user.idUsuarios
    const traer = await sql.query("select * from encuesta ")
    res.render("encuesta/encuestaLista", { traer})
}
encuestaControlador.traer = async (req, res) => {
    const ids = req.params.id
    const traer = await sql.query("select * from encuesta where idEncuestas =? ", [ids])
    res.render("encuesta/encuestaEditar", { traer})
}
encuestaControlador.editar = async (req, res) => {
    const id = req.user.idUsuarios
    const ids = req.params.id
    const { encuesta} = req.body
    const nuevoEncuesta = {
        encuesta
    }
    await orm.encuesta.findOne({where: {idEncuestas: ids}})
    .then (actualizar => {
        actualizar.update(nuevoEncuesta)
    })
    
    req.flash("success", "Actualizado exitosamente")
    res.redirect('/encuesta/encuestaLista/' + id);
    }


module.exports = encuestaControlador 