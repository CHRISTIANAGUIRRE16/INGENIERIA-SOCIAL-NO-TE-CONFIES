const detalleExperiencia = (sequelize, type)=>{
    return sequelize.define('detalleExperiencias', {
        idDetalleExperiencias: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        detalleExperiencias: type.STRING(2000),
        

        creacionDetalleExperiencia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleExperiencia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleExperiencia