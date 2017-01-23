'use strict'

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const sequelize = require('sequelize');

router.get('/home', function(req, res, next) {
  console.log('hello');

  let syncingTeamsTable = Teams.sync();

  syncingTeamsTable
    .then(function() {
        Teams.create({
            name: 'Hufflepuff',
            points: 2
        });
    })

  res.send()
  next();
});


module.exports = router;
