const recomendacionesControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

recomendacionesControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idRecomendaciones) from recomendaciones")
    res.render("recomendaciones/recomendacionesAgregar", { idMax });
}

recomendacionesControlador.enviar=async(req,res)=>{
    const id = req.user.idRecomendaciones
    const{idRecomendaciones, recomendaciones,descripcion }=req.body 
    const nuevoRecomendaciones= {
        recomendaciones,
        descripcion,
        clienteIdClientes:id
    }
    await orm.recomendaciones.create(nuevoRecomendaciones)
}
req.flash("success", "Guardado exitosamente")
    res.redirect('/recomendaciones/recomendacionesLista/' + id);
    recomendacionesControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from recomendaciones where clienteIdClientes =?",[ids])
    }

module.exports=recomendacionesControlador