const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "IngenieriaSocial";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1", 
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})

const proyectoModelo=require("../Modelos/proyecto")
const detalleProyectoModelo=require("../Modelos/detalleProyecto")
const usuarioModelo=require("../Modelos/usuario")
const clienteModelo=require("../Modelos/cliente")
const foroModelo=require("../Modelos/foro")
const detalleForoModelo=require("../Modelos/detalleForo") 
const comentarioModelo=require("../Modelos/comentario")
const experienciasModelo=require("../Modelos/experiencias")
const recomendacionesModelo=require("../Modelos/recomendaciones")
const consejosModelo=require("../Modelos/consejos")
const rolModelo=require("../Modelos/rol")
const conferenciasModelo=require("../Modelos/conferencias")
const salasModelo=require("../Modelos/salas")
const detalleRolModelo=require("../Modelos/detalleRol")
const detalleExperienciasModelo=require("../Modelos/detalleExperiencias");




const sequelize = new Sequelize(
  'IngenieriaSocial',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

const proyecto=proyectoModelo(sequelize, Sequelize)
const detalleProyecto=detalleProyectoModelo(sequelize, Sequelize)
const usuario=usuarioModelo(sequelize, Sequelize)
const cliente=clienteModelo(sequelize, Sequelize)
const foro=foroModelo(sequelize, Sequelize)
const salas=salasModelo(sequelize, Sequelize)
const detalleForo=detalleForoModelo(sequelize, Sequelize)
const comentario=comentarioModelo(sequelize, Sequelize)
const experiencias=experienciasModelo(sequelize, Sequelize)
const detalleExperiencias=detalleExperienciasModelo(sequelize, Sequelize)
const recomendaciones=recomendacionesModelo(sequelize, Sequelize)
const consejos=consejosModelo(sequelize, Sequelize)
const rol=rolModelo(sequelize, Sequelize)
const detalleRol=detalleRolModelo(sequelize, Sequelize)
const conferencias=conferenciasModelo(sequelize, Sequelize)



proyecto.hasMany(detalleProyecto)
detalleProyecto.belongsTo(proyecto)

foro.hasMany(detalleForo)
detalleForo.belongsTo(foro)

foro.hasMany(comentario)
comentario.belongsTo(foro)

experiencias.hasMany(detalleExperiencias)
detalleExperiencias.belongsTo(experiencias)

experiencias.hasMany(consejos)
consejos.belongsTo(experiencias)

usuario.hasMany(detalleRol)
detalleRol.belongsTo(usuario)

rol.hasMany(detalleRol)
detalleRol.belongsTo(rol)

cliente.hasMany(detalleRol)
detalleRol.belongsTo(cliente)

conferencias.hasMany(salas)
salas.belongsTo(conferencias)

usuario.hasMany(proyecto)
proyecto.belongsTo(usuario)

usuario.hasMany(foro)
foro.belongsTo(usuario)

usuario.hasMany(recomendaciones)
recomendaciones.belongsTo(usuario)

usuario.hasMany(consejos)
consejos.belongsTo(usuario)

usuario.hasMany(conferencias)
conferencias.belongsTo(usuario)

usuario.hasMany(salas)
salas.belongsTo(usuario)

cliente.hasMany(comentario)
comentario.belongsTo(cliente)

cliente.hasMany(recomendaciones)
recomendaciones.belongsTo(cliente)

cliente.hasMany(experiencias)
experiencias.belongsTo(cliente)

cliente.hasMany(consejos)
consejos.belongsTo(cliente)

cliente.hasMany(salas)
salas.belongsTo(cliente)

cliente.hasMany(foro)
foro.belongsTo(cliente)

cliente.hasMany(conferencias)
conferencias.belongsTo(cliente)





module.exports = {  
   proyecto,
   detalleProyecto,
   usuario,
   cliente,  
   foro,
   detalleForo,
   comentario,
   experiencias,
   detalleExperiencias,
   recomendaciones,
   consejos, 
   rol,
   detalleRol,
   conferencias,
   salas,
    
 
}