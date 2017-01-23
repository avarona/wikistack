'use strict'

const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const bodyParser = require('body-parser');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/wikidb');
// 'wikidb', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
//   });

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCahse: true} );

app.use(volleyball);

app.use('/', routes);

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Port 3000 is listening');
});
