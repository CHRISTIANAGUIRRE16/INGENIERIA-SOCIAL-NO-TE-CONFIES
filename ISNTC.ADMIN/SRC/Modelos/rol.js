const rol  = (sequelize, type)=>{
    return sequelize.define('rols', {
        idRols: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreRol: type.STRING,
      
        
        creacionRol:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRol:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = rol