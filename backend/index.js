
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const filmesRouter = require('./routes/filmes');

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/filmes', filmesRouter);

app.listen(process.env.PORT || 3000);