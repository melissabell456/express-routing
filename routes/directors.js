
const { Router } = require('express');
const dirRouter = Router();
const { getDirectors, getOneDirector } = require('../controllers/directorCtrl');

dirRouter.get('/director/:dirID', getOneDirector);
dirRouter.get('/directors', getDirectors);

module.exports = dirRouter;