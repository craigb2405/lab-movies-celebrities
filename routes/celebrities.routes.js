// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const Celebrity = require('../models/Celebrity.model')
const router = require("express").Router();



router.get('/new-celebrity', (req, res)=>{res.render('celebrities/new-celebrity')})

router.post('/new-celebrity', (req, res)=>{
    console.log(req.body)
    const {name, occupation, catchPhrase} = req.body 
    Celebrity.create({name:name, occupation:occupation, catchPhrase:catchPhrase})
    res.redirect('celebrities/celebrity-list') 
})

router.get('/celebrity-list',(req,res)=>{  
    Celebrity.find()
    .then((result)=>{
        console.log(result)
        res.render('celebrities/celebrity-list',{result})
    })
})


module.exports = router;