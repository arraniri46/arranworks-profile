const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/portofolio');

mongoose.connect('mongodb://127.0.0.1:27017/portofolio', (err) => {
    if (err){
        throw err;
    } else{
        console.log('Database Connected')
    }
});