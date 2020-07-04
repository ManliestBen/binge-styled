const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const movieRouter = require('./routes/movies');
const tvshowRouter = require('./routes/tvshows');
const cors = require('cors')

require('dotenv').config();
require('./config/database');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// This is where our routes go
app.use('/api/movies', movieRouter);
app.use('/api/tvshows', tvshowRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
