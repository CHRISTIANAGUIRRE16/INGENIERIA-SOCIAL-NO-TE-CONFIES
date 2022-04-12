const usuario = (sequelize, type)=>{
    return sequelize.define('usuarios', {
        idUsuarios: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING(99),
        password: type.STRING ,
        nombreCompleto: type.STRING ,
        email: type.STRING ,
         
        creacionUsuario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = usuario