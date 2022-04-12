const detalleProyecto = (sequelize, type)=>{
    return sequelize.define('detalleProyectos', {
        idDetalleProyectos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        objetivosProyecto: type.STRING,
        causasProyecto: type.STRING(2000),
        efectosProyecto: type.STRING(1000),
        
        
        creacionDetalleProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = detalleProyecto