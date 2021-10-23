const mongoose = require('mongoose');

const Portofolio = mongoose.model('Portofolio', {
    title: {
        type: String,
        required: true,
    },

    body: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now(),
    }

});

module.exports = Portofolio;

