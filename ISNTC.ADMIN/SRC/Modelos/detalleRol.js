const detalleRol = (sequelize, type)=>{
    return sequelize.define('detalleRols', {
        idDetalleRols: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        
        
        creacionDetalleRol:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleRol:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleRol