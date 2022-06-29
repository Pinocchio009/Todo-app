const router = require('express').Router();
const controller = require('../controllers/TodoController');

router.get('/', controller.getAllTodo)


module.exports = router;