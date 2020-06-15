var express = require('express');
var app = express();
var logger = require('morgan');
var session = require('express-session')
var FileStore = require('session-file-store')(session);
var SQLiteStore = require('connect-sqlite3')(session);

var mainRouter = require('./routes/main');
var loginRouter = require('./routes/login');
var signUpRouter = require('./routes/signUp');
var calRouter = require('./routes/cal');
var resultRouter = require('./routes/result');

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('views'));
app.use(session({
        secret: 'hello',
        resave: false,
        saveUninitialized: true,
        store: new SQLiteStore
}))
app.set('view engine', 'ejs');
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);
app.use('/cal', calRouter);
app.use('/cal/result', resultRouter);

app.listen(8060, function(){
    console.log('8060 포트에서 대기 중');
});