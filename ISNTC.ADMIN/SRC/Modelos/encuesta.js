const encuesta = (sequelize, type)=>{
    return sequelize.define('encuesta', {
        idEncuestas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        encuestas: type.STRING(2000), 
      
        
        
        creacionEncuesta:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionEncuesta:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = encuesta 