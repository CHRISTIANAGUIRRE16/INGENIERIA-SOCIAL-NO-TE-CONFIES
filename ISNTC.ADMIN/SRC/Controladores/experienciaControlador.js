const experienciasCtl = {}

const orm = require('../configuraciónBase/baseDatos.orm')
const sql = require('../configuraciónBase/baseDatos.sql')

experienciasCtl.mostrar = (req, res) => {
    res.render('experiencias/experienciasAgregar');
}

experienciasCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const {temaExperiencias, fechaExperiencias, videoExperiencias } = req.body;
    const nuevoEnvio = {
        temaExperiencias,
        fechaExperiencias, 
        videoExperiencias
    
        
    }
    await orm.experiencias.create(nuevoEnvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/experiencias/experienciasLista/' + id);
}

experienciasCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from experiencias')
    res.render('experiencias/experienciasLista', { lista })
}

experienciasCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from experiencias where idexperiencias = ?', [ids])
    res.render('experiencias/experienciasEditar', { lista })
}

experienciasCtl.actualizar = async (req, res) => {
    const id = req.user.idUsuarios
    const ids = req.params.id
    const {temaExperiencias, fechaExperiencias, videoExperiencias } = req.body
    const nuevoEnvio = {
        temaExperiencias,
        fechaExperiencias, 
        videoExperiencias
    }
    await orm.experiencias.findOne({ where: { idexperiencias: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'Actualizado con exito')
            res.redirect('/experiencias/experienciasLista/' + id);
        })
}

experienciasCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.experiencias.destroy({ where: { idexperiencias: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con exito')
            res.redirect('/experiencias/experienciasLista/' + id);
        })
}

module.exports = experienciasCtl