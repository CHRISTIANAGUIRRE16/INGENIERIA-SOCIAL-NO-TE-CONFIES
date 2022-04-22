const comentariosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

comentariosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idComentarios) from comentarios")
    res.render("comentarios/comentariosAgregar", { idMax });
}

comentariosControlador.enviar=async(req,res)=>{
    const id = req.user.idUsuarios
    const{idComentarios,comentarios}=req.body
    const nuevoComentario= {
        comentarios,
        clienteIdClientes:id
    }
    }
    req.flash("success", "Guardado exitosamente")
    res.redirect('/comentarios/comentariosLista/' + id);

    comentariosControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from comentarios where clienteIdClientes =?",[ids])
        res.render("comentarios/comentariosLista",{traer})
    }
    comentariosControlador.traer=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from comentarios where idComentarios =?",[ids])
        res.render("comentarios/comentariosEditar",{traer})

}
module.exports=comentariosControlador