const forosControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

forosControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idForos) from foros")
    res.render("foros/forosAgregar", { idMax });
}

forosControlador.enviar=async(req,res)=>{
    const id = req.user.idForos
    const{idForos,temaForo,fecha,horaFin,comentariosDetalleForo}=req.body
    const nuevoForos= {
        temaForo,
        fecha,
        horaFin,
        comentariosDetalleForo,
        clienteIdClientes:id
    }
    await orm.foros.create(nuevoForos)
    if (parseInt(numeros)===1){
        await sql.query ("insert into detalleforos (comentariosDetalleForo,foroIdForos)values(?,?)"[comentariosDetalleForo,idForos])
}
}
req.flash("success", "Guardado exitosamente")
    res.redirect('/foros/forosLista/' + id);

    forosControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from foros where clienteIdClientes =?",[ids])
        const traerForos = await sql.query ("select * from detalleforos ")
        res.render("foros/forosLista",{traer,traerForos})
    }
    forosControlador.traer=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from foros where idForos =?",[ids])
        const traerForos = await sql.query ("select * from detalleforos ")
        res.render("foros/forosLista",{traer,traerForos})



module.exports=forosControlador
