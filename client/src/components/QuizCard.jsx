import React from 'react';
import { Link } from 'react-router-dom'

function QuizCard(props) {
  return (
    <Link className="quiz-card" to={"quiz/" + props.quizId}>
      <div className="quiz-card-bg"></div>
      <img src={props.quizData.thumbnailImage ? props.quizData.thumbnailImage : '../assets/placeholder.png'} alt={props.quizData.answerText}/>
      <h3> {props.quizData.title} </h3>
    </Link>
  );
}

export default QuizCard;
