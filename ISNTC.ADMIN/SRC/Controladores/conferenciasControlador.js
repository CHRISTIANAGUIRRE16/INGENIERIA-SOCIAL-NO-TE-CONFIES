const conferenciasControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

conferenciasControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idConferencia) from conferencias")
    res.render("conferencias/conferenciasAgregar", { idMax });
}
conferenciasControlador.enviar=async(req,res)=>{
    const id = req.user.idUsuarios
    const{idConferencia,descripcionConferencia,fechaConferencia,direccionConferencia}=req.body
    const nuevoConferencias = {
        descripcionConferencia,
        fechaConferencia,
        direccionConferencia,
        clienteIdClientes:id	
    }

    await orm.conferencias.create(nuevoConferencias)
}
req.flash("success", "Guardado exitosamente")
    res.redirect('/conferencias/conferenciassLista/' + id);
    
    conferenciasControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from conferencias where clienteIdClientes =?",[ids] )
        res.render("conferencias/conferenciasLista",{traer})
    }
module.exports = conferenciasControlador
 