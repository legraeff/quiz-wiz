import React from 'react';
import AnswerOption from './AnswerOption';

function Question(props) {
  return (
    <div className="question">
      <h2> {props.questionData.questionTitle} </h2>
      <ul className="answers">
        {props.questionData.answers.map((answer, i) => <AnswerOption handleAnswer={props.handleAnswer} quizFinished={props.quizFinished} questionId={props.questionData.questionId} answerData={answer} key={i} />)}
      </ul>
    </div>
  );
}

export default Question;
