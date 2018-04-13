import React from 'react';

function AnswerOption(props) {
  let text;
  let imageClass;
  if (props.answerData.answerText) {
    text = <label> {props.answerData.answerText} </label>
  }
  else {
    imageClass = 'full-img';
  }

  return (
    <li className="answer-option">
      <img className={imageClass} src={props.answerData.answerImagePath ? props.answerData.answerImagePath : '../assets/placeholder.png'} alt={props.answerData.answerText}/>
      <input
        type="radio"
        name={props.questionId}
        id={"answer-" + props.answerData.answerId}
        disabled={props.quizFinished}
        value={props.answerData.answerId}
        onChange={props.handleAnswer}
      />
      {text}
    </li>
  );

}

export default AnswerOption;
