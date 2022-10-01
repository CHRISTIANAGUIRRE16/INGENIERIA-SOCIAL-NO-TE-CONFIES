const experiencias = (sequelize, type) => {
    return sequelize.define('experiencias', {
        idExperiencia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        AgregarNombre: type.STRING,
        AgregarExperiencia: type.STRING,
        



        creacionExperiencia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionExperiencia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = experiencias