#!/usr/bin/env node

require('mongoose').connect('mongodb://localhost/pollser');

const topics = [
    "Should dogs be allowed to fly?",
    "Should doors be shut at night?",
    "Should developers use IDEs?"
];
let Poll = require('../models/poll');

// empty the collection first
Poll.remove({})
    .then(() => {
        let polls = [];
        for (let i = 0; i < 5; i++) {
            polls.push({
                topic: topics[i],
                choices: [
                    {
                        value: "Yes",
                        votes: Math.round(Math.random() * 20),
                        id: 0
                    },
                    {
                        value: "No",
                        votes: Math.round(Math.random() * 20),
                        id: 1
                    },
                    {
                        value: "I really don't care",
                        votes: Math.round(Math.random() * 20),
                        id: 2
                    }
                ]
            });
        }
        return Poll.create(polls);
    })
    .then(() => {
        process.exit();
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });
