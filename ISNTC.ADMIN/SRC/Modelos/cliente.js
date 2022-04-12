const cliente = (sequelize, type)=>{
    return sequelize.define('clientes', {
        idClientes: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        userNameCliente: type.STRING(99),
        passwordCliente: type.STRING ,
        nombresCliente: type.STRING ,
        apellidosCliente: type.STRING ,
        cedulaCliente: type.STRING ,
        celularCliente: type.STRING ,
        edadCliente: type.STRING ,
        ciudadCliente: type.STRING ,

        creacionCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = cliente