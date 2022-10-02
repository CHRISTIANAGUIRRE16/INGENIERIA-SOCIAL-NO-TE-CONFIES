const proyectoControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

proyectoControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idProyectos) from proyectos")
    res.render("proyecto/proyectoAgregar", { idMax });
}

proyectoControlador.enviar = async (req, res) => {
    const id = req.user.idUsuarios
    const { idProyectos, objetivos, unico, nombreProyecto, descripcionProyecto, misionProyecto, visionProyecto, numeros, causasProyecto, efectosProyecto, } = req.body
    const nuevoProyecto = {
        nombreProyecto,
        descripcionProyecto,
        misionProyecto,
        visionProyecto,
        usuarioIdUsuarios: id
    }
    await orm.proyecto.create(nuevoProyecto)
    if (parseInt(numeros) === 1) {
        await sql.query("insert into detalleproyectos (objetivosProyecto,causasProyecto,efectosProyecto,proyectoIdProyectos)values(?,?,?,?)", [unico, causasProyecto, efectosProyecto, idProyectos])
    } else {
        if (parseInt(numeros) > 1) {
            for (let i = 0; i < objetivos.length; i++) {
                await sql.query("insert into detalleproyectos (objetivosProyecto,causasProyecto,efectosProyecto,proyectoIdProyectos)values(?,?,?,?)", [objetivos[i], causasProyecto, efectosProyecto, idProyectos])
            }
        }
    } 
    req.flash("success", "Guardado exitosamente")
    res.redirect('/proyecto/proyectoLista/' + id);
}

proyectoControlador.lista = async (req, res) => {
    const id = req.user.idUsuarios
    const traer = await sql.query("select * from proyectos where usuarioIdUsuarios =? ", [id])
    const objetivos = await sql.query("select * from detalleproyectos ")
    res.render("proyecto/proyectoLista", { traer, objetivos })
}
proyectoControlador.traer = async (req, res) => {
    const ids = req.params.id
    const traer = await sql.query("select * from proyectos where idProyectos =? ", [ids])
    const objetivos = await sql.query("select * from detalleproyectos ")
    res.render("proyecto/proyectoEditar", { traer, objetivos })
}
proyectoControlador.editar = async (req, res) => {
    const id = req.user.idUsuarios
    const ids = req.params.id
    const { objetivos, nombreProyecto, descripcionProyecto, misionProyecto, visionProyecto, causasProyecto, efectosProyecto, } = req.body
    const nuevoProyecto = {
        nombreProyecto,
        descripcionProyecto,
        misionProyecto,
        visionProyecto
    }
    await orm.proyecto.findOne({where: {idProyectos: ids}})
    .then (actualizar => {
        actualizar.update(nuevoProyecto)
    })
    if ( objetivos.length >10){
        await sql.query("update detalleProyectos set objetivosProyecto=?,causasProyecto=?, efectosProyecto=? where idDetalleProyectos=?",[objetivos,causasProyecto,efectosProyecto,ids])
    }
    if(objetivos.length < 10){
        for (let i = 0; i < objetivos.length; i++) {
            await sql.query("update detalleproyectos set objetivosProyecto=?,causasProyecto=?, efectosProyecto=? where idDetalleProyectos=?",[objetivos,causasProyecto,efectosProyecto, (parseInt(ids)+i)])
        }
    }
    req.flash("success", "Actualizado exitosamente")
    res.redirect("/proyecto/proyectoLista/" + id);
    }


module.exports = proyectoControlador