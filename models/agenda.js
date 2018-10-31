var mongoose = require('mongoose');

var AgendaSchema = new mongoose.Schema({
  commentaires: String
});

module.exports = mongoose.model('Agenda', AgendaSchema);