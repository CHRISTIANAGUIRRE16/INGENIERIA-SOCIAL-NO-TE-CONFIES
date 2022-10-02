const experiencias = (sequelize, type) => {
    return sequelize.define('experiencias', {
        idExperiencias: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temaExperiencias: type.STRING,
        fechaExperiencias: type.STRING,
        videoExperiencias: type.STRING,

        creacionExperiencias: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionExperiencias: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = experiencias