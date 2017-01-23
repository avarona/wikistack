'use strict'

const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const wikiRouter = require('./routes/');
const models = require('./models/');

// set up nunjucks for template assembly (boilerplate)
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true} );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log server messages in console
app.use(volleyball);

// for '/wiki/' path, use routes
app.use('/wiki', wikiRouter);

// files unde 'public' are usable for clients
app.use(express.static('public'));

// sync databse and initiate server
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
