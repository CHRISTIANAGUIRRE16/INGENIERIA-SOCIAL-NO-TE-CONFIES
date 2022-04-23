const experienciasControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

experienciasControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idExperiencias) from experiencias")
    res.render("experiencias/experienciasAgregar", { idMax });
}

experienciasControlador.enviar=async(req,res)=>{
    const id = req.user.idExperiencias
    const{idExperiencias,temaExperiencias,fechaExperiencias,detalleExperiencias}=req.body
    const nuevoExperiencias= {
        temaExperiencias,
        fechaExperiencias,
        detalleExperiencias,
        clienteIdClientes:id
    }
    await orm.foros.create(nuevoExperiencias)
    if (parseInt(numeros)===1){
        await sql.query ("insert into detalleexperiencias (detalleExperiencias,experienciaIdExperiencias)values(?,?)"[detalleExperiencias,
            idExperiencias])

}
}
req.flash("success", "Guardado exitosamente")
    res.redirect('/experiencias/experienciasLista/' + id);
    experienciasControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from experiencias where clienteIdClientes =?",[ids])
        const traerDetalle = await sql.query ("select * from detalleexperiencias ")
        res.render("experiencias/experienciasLista",{traer,traerDetalle})

    }

module.exports=experienciasControlador 