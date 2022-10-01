const conferencia = (sequelize, type)=>{
    return sequelize.define('conferencias', {
        idConferencia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        temaConferencia: type.STRING,
        descripcionConferencia: type.STRING,
        fechaConferencia: type.STRING,
        direccionConferencia: type.STRING,
        
        creacionConferencia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionConferencia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = conferencia