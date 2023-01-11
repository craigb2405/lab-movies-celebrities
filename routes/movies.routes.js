// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const { createIndexes } = require('../models/Celebrity.model');

const Movie = require("../models/Movie.model");
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")

//Creates

router.get("/movies/create", (req, res) => {
  Celebrity.find()
    .then((result) => {
        res.render("movies/new-movie", { result });
    })
    .catch((error) => {
      console.log(error);
    });

});

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({
    title: title,
    genre: genre,
    plot: plot,
    cast: cast
  })
    .then((result) => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/new-movie");
    });
});

router.get("/movies/", (req, res) => {
  Movie.find()

    .then((result) => {
      res.render("movies/movies", { result });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/movies/:movieId", (req, res) => {
  console.log(req.params)
    Movie.findById(req.params.movieId)
    .populate('cast')
    .then((movieDetails) => {
        console.log(movieDetails)
        res.render("movies/movie-details", movieDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  });

router.post('/movies/:movieId/delete',(req,res)=>{
  console.log(req.params.movieId)
  Movie.findByIdAndRemove(req.params.movieId)
  .then(()=>{
      res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error);
  });
})

router.get('/movies/:movieId/edit',(req,res)=>{
  Movie.findById(req.params.movieId)
  .populate('cast')
  .then((movieUpdate)=>{
    res.render('movies/edit-movie', movieUpdate)
  })
  .catch((error)=>{
    console.log(error)
  })
})

router.post('/movies/:movieId/edit', (req,res)=>{
  const movieId = req.params.movieId
  const { title, genre, plot, cast } = req.body;
  Movie.findByIdAndUpdate(movieId, {title, genre, plot, cast})
  .then((movie)=>{
    res.redirect(`/movies/:movieId`)
  })
  .catch((error)=>{
    console.log("THE ERROR: ", error)
  })
})

module.exports = router;
