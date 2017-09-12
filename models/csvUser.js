var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var csvUserSchema = new Schema({
  name: {
    type: String
  },
  id: {
    type: String
  },
  email: {
    type: String
  },
  tags: [{
    type: String
  }]
}, {timestamps: true});

var CsvUsers = mongoose.model('CsvUser', csvUserSchema);

module.exports = CsvUsers;
