
const { getAll, getOne } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
  getAll()
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
}

module.exports.getOneDirector = (req, res, next) => {
  let queriedDirectorID = req.params.dirID;
  getOne(queriedDirectorID)
  .then( (director) => {
    res.status(200).json(director);
  })
  .catch( (err) => next(err));
}