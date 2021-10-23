const mongoose = require('mongoose');

const Certificate = mongoose.model('Certificate', {
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    }
});

module.exports = Certificate;