const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/portofolio');

const MONGODB_URI = 'mongodb+srv://admin:stranded2@cluster0.sjby8.mongodb.net/portofolio?retryWrites=true&w=majority';

mongoose.connect('MONGODB_URI', (err) => {
    if (err){
        throw err;
    } else{
        console.log('Database Connected')
    }
});