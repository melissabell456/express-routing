
const { Router } = require('express');
const movieRouter = Router();
const { getAllMovies, getOneMovie } = require('../controllers/movieCtrl');

movieRouter.get(`/movie/:movieid`, getOneMovie);
movieRouter.get('/movies', getAllMovies);

module.exports = movieRouter;
