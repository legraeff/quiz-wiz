import React, { Component } from 'react';
import AnswerFactory from './AnswerFactory'

class QuestionFactory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [{id: 0}],
      id: props.id,
      questionId: props.id,
      questionTitle: ''
    };

    // this.updateAnswer = this.updateAnswer.bind(this);
    this.updateQuestionTitle = this.updateQuestionTitle.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(newObject, stateToUpdate) {
    let indexOfObject = this.state[stateToUpdate].map(o => o.id).indexOf(newObject.id);
    if (indexOfObject >= 0) {
      let tempArray = this.state[stateToUpdate];
      let tempArraySize = tempArray.length - 1;
      tempArray[indexOfObject] = newObject;
      if (indexOfObject === tempArraySize) {
        tempArray.push({id: tempArray[tempArraySize].id + 1})
      }
      this.setState({[stateToUpdate]: tempArray}, () => {
        this.props.updateFunction(this.state, "questions");
      });
    }
    else {
      this.setState({[stateToUpdate]: [...this.state[stateToUpdate], newObject]}, () => {
        this.props.updateFunction(this.state, "questions");
      });
    }
  }

  updateQuestionTitle(event) {
    this.setState({questionTitle: event.target.value}, ()=> { this.props.updateFunction(this.state, "questions")});
  }

  render() {
    return (
      <div className="factory-item factory-item--single">
        <p> Question {this.state.id + 1} </p>
        <label htmlFor={this.state.id + '-title'}>Question Title</label>
        <input id={this.state.id + '-title'} name={this.state.id + '-title'} type="text" onChange={this.updateQuestionTitle}/>
        <div className="factory-group">
          {this.state.answers.map((answer, i) => <AnswerFactory resultOptions={this.props.resultOptions} updateFunction={this.updateState} questionId={this.state.id} id={i} key={i} />)}
        </div>
      </div>
    );
  }
}

export default QuestionFactory;
