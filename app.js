const express = require('express');
const app = express();
const PORT = 3000;

const fs = require('fs');
const expressLayout = require('express-ejs-layouts');
const morgan = require('morgan');

require('./utils/connect-db');
const Certificate = require('./model/model-certificates');
const Portofolio = require('./model/model-portofolio');




app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

// third-party middleware
app.use(expressLayout);
app.use(express.static('public'));
app.use(morgan('dev'));

// konfigurasi middleware
app.set('view engine', 'ejs');


// routing section
app.get('/', async(req, res) => {

  const certificates = await Certificate.find(); 
  const portofolios = await Portofolio.find();

  context = {
    layout : 'layouts/main-layout',
    title : 'Welcome Brothers',
    certificates,
    portofolios,
  }

  res.render('index', context);
});

app.get('/settings', async(req, res) => {

  const certificates = await Certificate.find();

  context = {
    layout : 'layouts/main-layout',
    title : 'Settings',
    certificates,
  }

  res.render('settings', context);
});

app.get('/certificates',async(req, res) => {

  const certificates = await Certificate.find();

  context = {
    layout : 'layouts/main-layout',
    title : 'Ma Certificates',
    certificates,
  }
  res.render('certificates', context);
});
