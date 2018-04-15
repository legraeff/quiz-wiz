import React from 'react';
import { Link } from 'react-router-dom'

function QuizCard(props) {
  return (
    <Link className="quiz-card" to={"quiz/" + props.quizData.id}>
      <div className="quiz-card-bg"></div>
      <img src={props.quizData.imagePath ? props.quizData.imagePath : '../assets/placeholder.png'} alt={props.quizData.answerText}/>
      <h3> {props.quizData.title} </h3>
    </Link>
  );
}

export default QuizCard;
