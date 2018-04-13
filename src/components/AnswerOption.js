import React from 'react';

function AnswerOption(props) {
  return (
    <li>
      <input
        type="radio"
        name={props.questionId}
        id={"answer-" + props.answerData.answerId}
        disabled={props.quizFinished}
        value={props.answerData.answerId}
        onChange={props.handleAnswer}
      />
      <label htmlFor={"answer-" + props.answerData.answerId}>
        {props.answerData.answerText}
      </label>
    </li>
  );

}

export default AnswerOption;
