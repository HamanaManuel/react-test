const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  description: { type: String }
});

mongoose.model('movie', movieSchema);
