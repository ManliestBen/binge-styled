const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const movieRouter = require('./routes/movies');
const tvshowRouter = require('./routes/tvshows');
const userRouter = require('./routes/users');
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/movies', movieRouter);
app.use('/api/tvshows', tvshowRouter);
app.use('/api/users', userRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
