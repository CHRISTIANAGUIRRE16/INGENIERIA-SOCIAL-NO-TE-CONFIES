const comentario = (sequelize, type)=>{
    return sequelize.define('comentarios', {
        idComentarios: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comentarios: type.STRING(2000),
        creacionComentario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionComentario:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = comentario