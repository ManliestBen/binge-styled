const router = require('express').Router();
const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.index);
router.use(require('../config/auth'));
router.post('/', moviesCtrl.create);
router.delete('/:id', moviesCtrl.delete);
router.get('/:id', moviesCtrl.show);
router.put('/:id', moviesCtrl.update)

module.exports = router;