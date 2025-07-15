const router = require('express').Router();
const controller = require('../controllers/task.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, controller.create);
router.get('/', auth, controller.findAll);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router;
