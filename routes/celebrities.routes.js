// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const Celebrity = require('../models/Celebrity.model')
const router = require("express").Router();

router.get('/create', (req, res)=>{res.render('celebrities/new-celebrity')})

router.post('/celebrities/create', (req, res)=>{const {name, occupation, catchPhrase} = req.body
Celebrity.create({name:name, occupation:occupation, catchPhrase:catchPhrase})
res.redirect('/celebrities')
})

module.exports = router;