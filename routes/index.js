
let router = require('express').Router();

let Poll = require('./../models/poll');

router.get('/', (req, res, next) => {
    Poll.find().exec((err, polls) => {
        res.render('index', { polls });
    });
});

router.post('/:pollId/vote', (req, res, next) => {
    const choice = req.body.choice;
    const identifier = `choices.${choice}.votes`;
    Poll.update({_id: req.params.pollId}, {$inc: {[identifier]: 1}}, {}, (err, numberAffected) => {
        res.send('');
    });

});

module.exports = router;
