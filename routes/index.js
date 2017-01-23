'use strict'

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const db = require('sequelize');

router.get('/', function(req, res, next) {
  console.log('hello');
  res.render('layout');
  next();
});

module.exports = router;
