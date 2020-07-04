const router = require('express').Router();
const moviesCtrl = require('../controllers/movies');

router.post('/', moviesCtrl.create);
router.get('/', moviesCtrl.index);
router.delete('/:id', moviesCtrl.delete);
router.get('/:id', moviesCtrl.show);
router.put('/:id', moviesCtrl.update)

module.exports = router;