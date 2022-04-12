const proyecto = (sequelize, type)=>{
    return sequelize.define('proyectos', {
        idProyectos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreProyecto: type.STRING,
        descripcionProyecto: type.STRING(2000),
        misionProyecto: type.STRING(1000),
        visionProyecto: type.STRING(1000),
        
        creacionProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = proyecto