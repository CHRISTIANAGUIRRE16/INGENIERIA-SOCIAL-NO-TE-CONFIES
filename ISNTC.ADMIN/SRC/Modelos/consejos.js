const consejos = (sequelize, type)=>{
    return sequelize.define('consejos', {
        idConsejos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        consejo: type.STRING(2000),
        

        creacionConsejos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionConsejos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = consejos