import React from 'react';

function AnswerOption(props) {
  let answerTitle;
  let answerImage;
  if (props.answerData.answerTitle) {
    answerTitle = <p className="answer-option-text"> {props.answerData.answerTitle} </p>
  }
  if (props.answerData.answerImagePath) {
    answerImage = (
      <div className="answer-option-image">
        <img src={props.answerData.answerImagePath} alt={props.answerData.answerTitle}/>
      </div>
    )
  }


  return (
    <li className="answer-option">
      <input
        className="answer-option-input"
        type="radio"
        name={props.questionId}
        id={"q-" + props.questionId + "-a-" + props.answerData.answerId}
        disabled={props.quizFinished}
        value={props.answerData.answerId}
        onChange={props.handleAnswer}
      />
      <label className="answer-option-label" htmlFor={"q-" + props.questionId + "-a-" + props.answerData.answerId}>
        {answerImage}
        {answerTitle}
      </label>
    </li>
  );

}

export default AnswerOption;
