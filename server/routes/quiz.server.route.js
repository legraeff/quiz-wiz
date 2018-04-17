import express from 'express';
import * as quizController from '../controllers/quiz.server.controller';

const router = express.Router();


router.route('/')
      .get(quizController.getAllQuizzes)
router.route('/:id')
      .get(quizController.getQuizById)
router.route('/create')
      .post(quizController.createQuiz)

export default router;
