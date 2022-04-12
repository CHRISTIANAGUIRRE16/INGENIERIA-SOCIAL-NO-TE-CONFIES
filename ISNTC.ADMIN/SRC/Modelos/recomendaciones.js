const recomendaciones  = (sequelize, type)=>{
    return sequelize.define('recomendaciones', {
        idRecomendaciones: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        recomendación: type.STRING(2000),
        descripciónRecomendacion: type.STRING(2000),
        
        
        creacionRecomendaciones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRecomendaciones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = recomendaciones