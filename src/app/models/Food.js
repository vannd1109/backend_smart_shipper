const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Food = Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Food', Food);