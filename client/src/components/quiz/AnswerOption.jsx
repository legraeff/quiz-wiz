import React from 'react';

function AnswerOption(props) {
  let answerTitle;
  let imageClass;
  let answerImage
  if (props.answerData.answerTitle) {
    answerTitle = <p> {props.answerData.answerTitle} </p>
  }
  else {
    imageClass = 'full-img';
  }
  if (props.answerData.answerImagePath) {
    answerImage = <div className={imageClass}><img src={props.answerData.answerImagePath} alt={props.answerData.answerTitle}/></div>
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
        {answerTitle}
      </label>
    </li>
  );

}

export default AnswerOption;
