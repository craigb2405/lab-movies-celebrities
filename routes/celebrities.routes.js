// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const Celebrity = require("../models/Celebrity.model");
const router = require("express").Router();

//Create

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  })
    .then((result) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/new-celebrity");
    });
});

router.get("/celebrities/", (req, res) => {
  Celebrity.find()
    .then((result) => {
      res.render("celebrities/celebrities", { result });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
