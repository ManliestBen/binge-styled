const router = require('express').Router();
const tvshowsCtrl = require('../controllers/tvshows');

router.get('/', tvshowsCtrl.index);
router.get('/:id', tvshowsCtrl.show);
router.post('/', tvshowsCtrl.create);
router.put('/:id', tvshowsCtrl.update);
router.delete('/:id', tvshowsCtrl.delete);

module.exports = router;