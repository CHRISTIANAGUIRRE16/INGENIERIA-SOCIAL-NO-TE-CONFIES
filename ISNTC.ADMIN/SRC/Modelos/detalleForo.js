const detalleForo = (sequelize, type)=>{
    return sequelize.define('detalleForos', {
        idDetalleForos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        comentariosDetalleForo: type.STRING(2000),
        

        creacionDetalleForo:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleForo:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleForo