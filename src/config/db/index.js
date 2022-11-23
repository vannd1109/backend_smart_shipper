const mongoose = require('mongoose');

const uri = `mongodb://localhost:27017`
const options = { useNewUrlParser: true, useUnifiedTopology: true }

async function connect() {
    try {
        await mongoose.connect(uri, options);
        console.log("Connection Successfully!!!");
    } catch (error) {
        console.log("Connection Failure!!!");
    }
}

module.exports = { connect };