const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const path = require('path');
const favicon = require('serve-favicon');
require('dotenv').config();
require('./config/database');

const movieRouter = require('./routes/movies');
const tvshowRouter = require('./routes/tvshows');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth')
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/movies', movieRouter);
app.use('/api/tvshows', tvshowRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
