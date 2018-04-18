import React from 'react';
import { Link } from 'react-router-dom'

function QuizCard(props) {
  return (
    <Link className="quiz-card" to={"quiz/" + props.quizId}>
      <div>
        <img className="quiz-card-image" src={props.quizData.thumbnailImage ? props.quizData.thumbnailImage : '../assets/placeholder.png'} alt={props.quizData.answerText}/>
      </div>
      <h3 className="quiz-card-title"> {props.quizData.title} </h3>
    </Link>
  );
}

export default QuizCard;
