const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryFood = new Schema({
    code: { type: String },
    name: { type: String },
    image: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('CategoryFood', CategoryFood);