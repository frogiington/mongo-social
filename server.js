const express = require('express');
const controller = require('./Controller');
const mongoose = require('./config/connection.js');
const { db } = require('./Models/reaction');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(controller);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});


//checking 