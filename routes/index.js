'use strict'

const express = require('express');
const router = express.Router();
const models = require('../models/');

// retrieve all wiki pages
router.get('/', function(req, res, next) {
  res.render('index');
  next();
});

// submit a new page to the database
router.post('/', function(req, res, next) {
  let page = models.Page.build({
    title: req.body.title,
    content: req.body.content,
    urlTitle: models.Page.route
  });
  page.save()
  .then(res.json(function(createdPage) {
      return createdPage;
    })
    // res.redirect('/wiki/');
  )
  .catch(next);
});

// retrieve the 'add a page' form
router.get('/add/', function(req, res, next) {
  res.render('addpage');
  next();
});

module.exports = router;


// json = {
//   name: 'author name',
//   email: 'author email',
//   title: 'title of page',
//   content: 'content of page',
//   page-status: 'status of page'
// }
