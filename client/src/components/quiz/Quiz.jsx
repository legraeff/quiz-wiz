import React, { Component } from 'react';
import './Quiz.css';

import Question from './Question';
import Result from './Result';
import QuizTitle from './QuizTitle';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      questions: [],
      isQuizFinished: false,
      resultOptions: '',
      numberOfQuestions: '',
      selectedAnswers: '',
      result: null
    }
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentWillMount() {
    const selectedQuizId = this.props.match.params.id;
    fetch(`http://localhost:8080/api/${selectedQuizId}`)
    .then(results => {
      return results.json();
    }).then(results => {
      let foundQuiz = results.data[0];
      this.setState({
        title: foundQuiz.title,
        questions: foundQuiz.questions,
        isQuizFinished: false,
        resultOptions: foundQuiz.resultOptions,
        numberOfQuestions: foundQuiz.questions.length,
        selectedAnswers: new Map(),
        result: null
      });
    });
  }


  componentDidUpdate() {
    if (this.state.result) { return }
    if (this.state.isQuizFinished) { this.computeAnswersAndSetResult() };
  }


  handleAnswer(event) {
    this.storeAnswer(event.currentTarget.name, event.currentTarget.value);
  }

  storeAnswer(questionId, answerId) {
    let tempSelectedAnswers = this.state.selectedAnswers;
    tempSelectedAnswers.set(questionId, answerId)
    this.setState({ selectedAnswers: tempSelectedAnswers });
    this.checkIfQuizFinished();
  }

  checkIfQuizFinished() {
    this.setState({ isQuizFinished: this.state.selectedAnswers.size >= this.state.numberOfQuestions});
  }

  computeAnswersAndSetResult() {
    let pontuations = this.retrievePontuations();
    let totals = {};
    for (let item of pontuations) {
      if (!totals[item.key]) {
        totals[item.key] = 0;
      }
      totals[item.key] = totals[item.key] + parseInt(item.value, 10);
    }
    this.findResult(totals);
  }

  retrievePontuations() {
    let pontuations = [];
    for (let [questionId, answerId] of this.state.selectedAnswers) {
      let tempQ = this.state.questions.find(question => question.questionId === questionId)
      let tempA = tempQ.answers.find(answer => answer.answerId === answerId);
      pontuations = [...pontuations, ...tempA.pontuation];
    }
    return pontuations;
  }

  findResult(totals) {
    let resultKey = Object.keys(totals).reduce((a, b) => totals[a] > totals[b] ? a : b);
    let finalResult = this.state.resultOptions.find(result => result.resultKey === resultKey);
    finalResult ? this.setState({result: finalResult}) : this.setState({result: 'Result is undefined'})
  }

  render() {
    return (
      <div>
        <QuizTitle title={this.state.title.text}/>
        {this.state.questions.map((question, i) => <Question handleAnswer={this.handleAnswer} quizFinished={this.state.isQuizFinished} questionData={question} key={i} />)}
        <Result resultData={this.state.result}/>
      </div>
    );
  }
}

export default Quiz;
