import React, { Component } from 'react';
import QuizCard from './QuizCard.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api')
    .then(results => {
      return results.json();
    }).then(results => {
      this.setState({
        quizzes: results.data,
      });
    });
  }

  render() {
    return (
      <div className="pink-bg">
        <div className="container">
          <h1 className="page-title"> Check out some popular quizes: </h1>
          <div className="quiz-card-group">
            {this.state.quizzes.map((quiz, i) => <QuizCard quizId={quiz._id} quizData={quiz.thumbnail} key={i} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
