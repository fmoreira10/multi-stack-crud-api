const router = require('express').Router();
const controller = require('../controllers/user.controller');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
