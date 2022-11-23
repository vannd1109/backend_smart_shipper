const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema({
  name: { type: String },
  username: { type: String },
  password: { type: String },
  type: { type: Number },
  age: { type: Number },
  image: { type: String },
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', Customer);
