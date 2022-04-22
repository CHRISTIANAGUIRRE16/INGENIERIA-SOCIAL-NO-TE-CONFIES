const rolsControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

rolsControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idRols) from rols")
    res.render("rols/rolsAgregar", { idMax });
}
rolsControlador.enviar=async(req,res)=>{
    const id = req.user.idUsuarios
    const{idRols,nombreRols}=req.body
    const nuevoRols = {
        nombreRols,
        clienteIdClientes:id	
    }

    await orm.rol.create(nuevoRols)
}
req.flash("success", "Guardado exitosamente")
    res.redirect('/rols/rolsLista/' + id);
    
    rolsControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from rols where clienteIdClientes =?",[ids])
        res.render("rols/rolsLista",{traer})
    }
module.exports=rolsControlador