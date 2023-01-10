// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

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

router.get("/movies/:id", (req, res) => {
    const movieId = req.params.id
    Movie.findById(movieId)
    // .populate('cast')
      .then((result) => {
        res.render("movies/movie-details", { result });
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
