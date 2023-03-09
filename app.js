/* Imports */
const express = require('express');
const morgan = require('morgan');
const app = express();
const { db, Page, User } = require('./models');


/* Router */
const userRouter = require('./routes/users');
const wikiRouter = require('./routes/wiki');

/* Middleware */
app.use(morgan());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);


const PORT = 1337;
app.get('/', (req,res) => {
    // res.send('Hello World!');
    res.redirect('/wiki');
});


db.authenticate() 
  .then(async () => { 
    console.log('connected to the database');
    await db.sync(); 
    app.listen(PORT, () => {console.log(`Server is Running on port ${PORT}!`)});
});

