var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agenda = require('../models/agenda.js');

/* GET ALL AGENDAS */
router.get('/', function(req, res, next) {
  Agenda.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE AGENDA */
router.post('/', function(req, res, next) {
  Agenda.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Agenda */
router.put('/:id', function(req, res, next) {
  Agenda.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Agenda */
router.delete('/:id', function(req, res, next) {
  Agenda.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;