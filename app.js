'use strict'

const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const routes = require('./routes/');
const models = require('./models')

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCahse: true} );

app.use(volleyball);

app.use('/', routes);

app.use(express.static('public'));

models.User.sync({})
  .then(function() {
    return models.Page.sync({})
  })
  .then(function() {
    app.listen(3000, function() {
      console.log('Port 3000 is listening');
    });
  })
  .catch(console.error);
