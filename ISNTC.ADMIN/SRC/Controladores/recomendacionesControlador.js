const recomendacionesCtl = {}

const orm = require('../configuraciónBase/baseDatos.orm')
const sql = require('../configuraciónBase/baseDatos.sql')

recomendacionesCtl.mostrar = (req, res) => {
    res.render('recomendaciones/recomendacionesAgregar');
}

recomendacionesCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const {recomendacion, descripcionRecomendacion } = req.body
    const nuevoEnvio = {
        recomendacion,
        descripcionRecomendacion,
        
    }
    await orm.recomendaciones.create(nuevoEnvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/recomendaciones/recomendacionesLista/' + id);
}

recomendacionesCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from recomendaciones')
    res.render('recomendaciones/recomendacionesLista', { lista })
}

recomendacionesCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from recomendaciones where idRecomendaciones = ?', [ids])
    res.render('recomendaciones/recomendacionesEditar', { lista })
}

recomendacionesCtl.actualizar = async (req, res) => {
    const id = req.user.idUsuarios
    const ids = req.params.id
    const {recomendacion, descripcionRecomendacion} = req.body
    const nuevoEnvio = {
        recomendacion,
        descripcionRecomendacion,
    }
    await orm.recomendaciones.findOne({ where: { idRecomendaciones: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'Actualizado con exito')
            res.redirect('/recomendaciones/recomendacionesLista/' + id);
        })
}

recomendacionesCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.recomendaciones.destroy({ where: { idRecomendaciones: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con exito')
            res.redirect('/recomendaciones/recomendacionesLista/' + id);
        })
}

module.exports = recomendacionesCtl