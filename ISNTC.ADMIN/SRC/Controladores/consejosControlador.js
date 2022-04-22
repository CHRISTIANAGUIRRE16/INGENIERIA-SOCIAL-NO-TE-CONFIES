const consejosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

consejosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idConsejos) from consejos")
    res.render("consejos/consejosAgregar", { idMax });
}
consejosControlador.enviar=async(req,res)=>{
    const id = req.user.idUsuarios
    const{idConsejos,consejos}=req.body
    const nuevoConsejos = {
        consejos,
        clienteIdClientes:id		
    }

    await orm.consejos.create(nuevoConsejos)
}
req.flash("success", "Guardado exitosamente")
    res.redirect('/consejos/consejosLista/' + id);
    
    consejosControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from consejos where clienteIdClientes =?",[ids])
        res.render("consejos/consejosLista",{traer})
    }
module.exports=consejosControlador