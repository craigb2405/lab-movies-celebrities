// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const Celebrity = require('../models/Celebrity.model')
const router = require("express").Router();

//Create

router.get('/celebrities/create', (req, res)=>{res.render('celebrities/new-celebrity')})

router.post('/celebrities/create', (req, res)=>{
    console.log(req.body)
    const {name, occupation, catchPhrase} = req.body 
    Celebrity.create({name:name, occupation:occupation, catchPhrase:catchPhrase})
    res.redirect('/celebrities') 
})

router.get('/celebrities/',(req,res)=>{  
    Celebrity.find()
    .then((result)=>{
        res.render('celebrities/celebrities',{ result})
    })
    .catch((error)=>{console.log(error)
       
    })
})


module.exports = router;