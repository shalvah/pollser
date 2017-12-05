
let mongoose = require('mongoose');

let Poll = mongoose.model('Poll', {
    topic: String,
    choices: [
        {
            value: String,
            votes: Number,
            id: Number
        }
    ]
});

module.exports = Poll;
