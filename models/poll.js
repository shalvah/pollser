
let mongoose = require('mongoose');

let Poll = mongoose.model('Poll', {
    topic: String,
    options: [{ value: String, votes: Number }]
});

module.exports = Poll;
