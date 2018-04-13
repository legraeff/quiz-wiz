import React from 'react';
import AnswerOption from './AnswerOption';

function Question(props) {
  return (
    <div>
      <h2> {props.questionData.questionTitle} </h2>
      {props.questionData.answers.map((answer, i) => <AnswerOption handleAnswer={props.handleAnswer} quizFinished={props.quizFinished} questionId={props.questionData.questionId} answerData={answer} key={i} />)}
    </div>
  );
}

export default Question;
