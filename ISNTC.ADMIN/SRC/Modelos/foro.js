const foro = (sequelize, type)=>{
    return sequelize.define('foros', {
        idForos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temaForo: type.STRING,
       fechaForo: type.STRING,
       horafinForo: type.STRING,
      
        
        
        creacionForo:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionForo:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = foro