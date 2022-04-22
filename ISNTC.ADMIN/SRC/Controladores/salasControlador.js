const salasControlador = {}
const orm = require("../configuraciónBase/baseDatos.orm")
const sql = require("../configuraciónBase/baseDatos.sql")

salasControlador.mostrar = async (req, res) => {
    const idMax = await sql.query("select MAX(idSalas) from salas")
    res.render("salas/salasAgregar", { idMax });
}
salasControlador.enviar=async(req,res)=>{
    const id = req.user.idUsuarios
    const{idSalas,nombreSalas,capacidadSalas,}=req.body
    const nuevoSalas = {
        nombreSalas,
        capacidadSalas,
        clienteIdClientes:id
    }

    await orm.salas.create(nuevoSalas)
}
req.flash("success", "Guardado exitosamente")
    res.redirect('/salas/salasLista/' + id);   
     
    salasControlador.lista=async(req,res)=>{
        const ids = req.params.id
        const traer = await sql.query ("select * from salas where clienteIdClientes =?",[ids])
        res.render("salas/salasLista",{traer})
    }
module.exports=salasControlador