import mongoose from 'mongoose';
import Quiz from '../models/quiz.server.model';

export const getAllQuizzes = (req,res) => {
  Quiz.find().exec((err,data) => {
    if (err) {
      return res.json({'success': false, 'message': 'A error occurred on the request'});
    }
    return res.json({'success': true, 'message': 'Quizzes fetched successfully', data});
  });
}


export const getQuizById = (req,res) => {
  Quiz.find({_id: req.params.id}).exec((err,data) => {
    if (err) {
      return res.json({'success': false, 'message': 'A error occurred on the request'});
    }
    if (data.length) {
      return res.json({'success': true, 'message': 'Quiz fetched by id successfully', data});
    }
    else {
      return res.json({'success': false, 'message': 'Quiz not found'});
    }
  })
}

export const createQuiz = (req,res) => {
  req.body.questions = req.body.questions.filter(question => question.questionTitle);
  req.body.questions.map(q => {
    return q.answers = q.answers.filter(answer => answer.answerTitle)
  })
  const newQuiz = new Quiz(req.body);
  newQuiz.save((err,data) => {
    if (err) {
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Quiz added successfully',data});
  })
}
