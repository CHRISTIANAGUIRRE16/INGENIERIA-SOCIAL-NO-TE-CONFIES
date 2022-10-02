const comentariosCtl = {}

const orm = require('../configuraciónBase/baseDatos.orm')
const sql = require('../configuraciónBase/baseDatos.sql')

comentariosCtl.mostrar = (req, res) => {
    res.render('comentarios/comentariosAgregar');
}

comentariosCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const { comentarios } = req.body
    const nuevoEnvio = {
        comentarios,
        
    }
    await orm.comentario.create(nuevoEnvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/comentarios/comentariosLista/' + id);
}

comentariosCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from comentarios')
    res.render('comentarios/comentariosLista', { lista })
}

comentariosCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from comentarios where idComentarios = ?', [ids])
    res.render('comentarios/comentariosEditar', { lista })
}

comentariosCtl.actualizar = async (req, res) => {
    const id = req.user.idUsuarios
    const ids = req.params.id
    const {comentarios} = req.body
    const nuevoEnvio = {
        comentarios,
        
    }
    await orm.comentario.findOne({ where: { idComentarios: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'Actualizado con exito')
            res.redirect('/comentarios/comentariosLista/' + id);
        })
}

comentariosCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.comentario.destroy({ where: { idComentarios: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con exito')
            res.redirect('/comentarios/comentariosLista/' + id);
        })
}

module.exports = comentariosCtl