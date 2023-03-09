const {Router} = require('express');
const router = Router();
const { Page } = require("../models");

const addPage = require('../views/addPage');
const wikiPage = require('../views/wikiPage');

/* SLUGS */
// const slugCreator = ([...title]) => {
//     console.log(title);
//     const re = new RegExp("\\w+", '!@#$%^&*()');

//     return title.map(char => {
//         if (re.test(char)) {
//             char = '-';
//         }
//         return char;
//     }).join('');
//     // return re(title);
// }
function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }


router.get('/', (req, res, next) => {
    res.send('<h1>HELLO!</h1>');
});

router.post('/', async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const status = req.body.status;
    try {
        const page = await Page.create({
            title,
            slug: slugCreator(title),
            content,
            status,
        })
        res.send(`/${page.slug}`);
    } catch(error) {
        next(error);
    }
    
});

router.get('/add', (req, res, next) => {
    res.send(addPage());
});

router.get('/posts', (req, res, next) => {
    res.send(wikiPage('HI'));
});

module.exports = router;

  