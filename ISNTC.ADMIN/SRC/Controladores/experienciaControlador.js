const experienciaCtl = {}

const orm = require('../configuraciónBase/baseDatos.orm')
const sql = require('../configuraciónBase/baseDatos.sql')

experienciaCtl.mostrar = (req, res) => {
    res.render('experiencias/experienciasAgregar');
}

experienciaCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const { temaExperiencias, fechaExperiencias, videoExperiencias, } = req.body
    const nuevoEnvio = {
       temaExperiencias,
       fechaExperiencias,
       videoExperiencias,
        
    }
    await orm.experiencias.create(nuevoEnvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/experiencias/experienciasLista/' + id);
}

experienciaCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from experiencias')
    res.render('experiencias/experienciasLista', { lista })
}

experienciaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from experiencias where idExperiencias = ?', [ids])
    res.render('experiencias/experienciasEditar', { lista })
}

experienciaCtl.actualizar = async (req, res) => {
    const id = req.user.idUsuarios
    const ids = req.params.id
    const {temaExperiencias, fechaExperiencias, videoExperiencias,} = req.body
    const nuevoEnvio = {
        temaExperiencias,
        fechaExperiencias,
        videoExperiencias,
        
    }
    await orm.experiencias.findOne({ where: { idExperiencias: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'Actualizado con exito')
            res.redirect('/experiencias/experienciasLista/' + id);
        })
}

experienciaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.experiencias.destroy({ where: { idExperiencias: ids } })
        .then(() => {
            req.flash('success', 'Actualizado con exito')
            res.redirect('/experiencias/experienciasLista/' + id);
        })
}

module.exports = experienciaCtl