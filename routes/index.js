var express = require('express');
var router = express.Router();

console.log("Cargamos el controlador quiz_controller");
var quizController = require('../controllers/quiz_controller');
console.log("Cargado... " + quizController);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
