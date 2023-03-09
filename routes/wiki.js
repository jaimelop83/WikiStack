const {Router} = require('express');
const router = Router();

const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
    res.send('ANYTHING');
});

router.post('/', (req, res, next) => {
    console.log(res.req.body);
    res.send('POST');
    
});

router.get('/add', (req, res, next) => {
    res.send(addPage());
});

module.exports = router;

  