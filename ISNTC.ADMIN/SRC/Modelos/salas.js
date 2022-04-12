const salas  = (sequelize, type)=>{
    return sequelize.define('salas', {
        idSalas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreSalas: type.STRING,
        capacidadSalas: type.STRING,
        
        creacionSalas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionSalas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = salas