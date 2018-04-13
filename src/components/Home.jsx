import React, { Component } from 'react';
import QuizCard from './QuizCard.jsx';
import quizzesData from '../api/listOfQuizzes.json'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: quizzesData,
    };
  }

  render() {
    return (
      <div className="pink-bg">
        <div className="container">
          <h1 className="page-title"> Check out some popular quizes: </h1>
          <div className="quiz-card-group">
            {this.state.quizzes.map((quiz, i) => <QuizCard quizData={quiz} key={i} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
