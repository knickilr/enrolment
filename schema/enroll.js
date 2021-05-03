const mongoose = require('mongoose')

const enrollSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    unique_id: {
        type: String
    }
})

const Enroll = mongoose.model('enroll', enrollSchema);

module.exports = Enroll;