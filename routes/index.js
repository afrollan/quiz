var express = require('express');
var router = express.Router();

console.log("Cargamos el controlador quiz_controller");
var quizController = require('../controllers/quiz_controller');
console.log("Cargado... " + quizController);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/author', function (req, res) {
  res.render('author');
});

module.exports = router;
