const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash'); 
const mysqlstore = require('express-mysql-session')(session);
const bodyparser = require('body-parser');
const fileUpload = require("express-fileupload"); 

const { database } = require('./keys'); 

const app = express(); 
require('./lib/passport');

/// archivos compartidos
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'Vistas'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpres: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');
/// archivos compartidos


//midlewars
app.use(fileUpload()); 
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(session({
    secret: 'IS',
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales 
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});
//varible globales 

//public
app.use(express.static(path.join(__dirname, 'public')));
//public


//routers
app.use(require("./rutas/indexRutas"))
app.use(require("./rutas/login.rutas"))
app.use("/proyecto",require("./rutas/proyectoRutas"))
app.use("/comentarios",require("./rutas/comentariosRutas"))
app.use("/encuesta",require("./rutas/encuestaRutas"))
app.use("/experiencias",require("./rutas/experienciasRutas"))
module.exports = app;