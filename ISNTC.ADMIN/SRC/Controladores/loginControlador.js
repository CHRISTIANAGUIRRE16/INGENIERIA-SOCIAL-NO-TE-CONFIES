const loginControlador={} 
const passport =require("passport")

loginControlador.mostrar = (req, res) =>{
    res.render("login/login");
} 

loginControlador.login = passport.authenticate("local.signin",{
    successRedirect: "/proyecto/proyectoLista/1",
    failureRedirect: "/login",
    failureFlash: true
}) 

loginControlador.mostrarRegistro = (req, res) =>{
    res.render("login/registro");
}

loginControlador.registro = passport.authenticate("local.signup",{
    successRedirect: "/cerrarSesion",
    failureRedirect: "/registro",
    failureFlash: true
}) 

loginControlador.cerrar = (req, res, next) =>{
    req.logout();
    res.redirect("/login");
}

module.exports = loginControlador




