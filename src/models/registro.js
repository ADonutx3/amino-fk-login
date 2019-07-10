const mongoose = require('mongoose');
const { Schema } = mongoose;

const registroSchema = new Schema({
  correo: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('registro', registroSchema);
