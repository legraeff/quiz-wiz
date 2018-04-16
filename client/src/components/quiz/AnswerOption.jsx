import React from 'react';

function AnswerOption(props) {
  let answerText;
  let imageClass;
  let answerImage
  if (props.answerData.answerText) {
    answerText = <p> {props.answerData.answerText} </p>
  }
  else {
    imageClass = 'full-img';
  }
  if (props.answerData.answerImagePath) {
    answerImage = <div className={imageClass}><img src={props.answerData.answerImagePath} alt={props.answerData.answerText}/></div>
  }


  return (
    <li className="answer-option">
      <input
        type="radio"
        name={props.questionId}
        id={"q-" + props.questionId + "-a-" + props.answerData.answerId}
        disabled={props.quizFinished}
        value={props.answerData.answerId}
        onChange={props.handleAnswer}
      />
      <label htmlFor={"q-" + props.questionId + "-a-" + props.answerData.answerId}>
        {answerImage}
        {answerText}
      </label>
    </li>
  );

}

export default AnswerOption;
