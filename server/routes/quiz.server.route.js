import express from 'express';
import * as quizController from '../controllers/quiz.server.controller';

const router = express.Router();


router.route('/')
      .get(quizController.getAllQuizzes)
router.route('/:id')
      .get(quizController.getQuizById)


export default router;
