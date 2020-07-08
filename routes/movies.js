const router = require('express').Router();
const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.index);

router.use(require('../config/auth'));
router.post('/', checkAuth, moviesCtrl.create);
router.delete('/:id', checkAuth, moviesCtrl.delete);
router.get('/:id', checkAuth, moviesCtrl.show);
router.put('/:id', checkAuth, moviesCtrl.update)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

  module.exports = router;