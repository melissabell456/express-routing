
const { Router } = require('express');
const router = Router();

// router.use(require('./movieQuery'));
// router.use(require('./director'));
router.use(require('./movies'));
router.use(require('./directors'));

module.exports = router;