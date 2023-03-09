const express = require('express');
const morgan = require('morgan');
const app = express();
const { db } = require('./models');

app.use(morgan());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


const PORT = 1337;
app.get('/', (req,res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {console.log('Server is Running')});

db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
})