
let router = require('express').Router();

let Poll = require('./../models/poll');

router.get('/', (req, res, next) => {
    Poll.find().exec((err, polls) => {
        res.render('index', { polls: polls });
    });
});

module.exports = router;
