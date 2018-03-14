
const { getAll, getOne } = require('../models/Movie');

module.exports.getAllMovies = (req, res, next) => {
  getAll()
  .then( (movies) => {
    res.status(200).json(movies);
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getOneMovie = (req, res, next) => {
  console.log("should just be movie id", req.params.movieid);
  let queriedMovie = req.params.movieid; 
  getOne(queriedMovie)
  .then( (movie) => {
    res.status(200).json(movie);
  })
  .catch( (err) => {
    next(err);
  });
};

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }