import React, { Component } from 'react';
import QuestionFactory from './QuestionFactory';
import ResultFactory from './ResultFactory';

class QuizFactory extends Component {
  constructor() {
    super();
    this.state = {
      thumbnail: {},
      title: {},
      questions: [{id: 0}],
      resultOptions: [{id: 0}],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateState = this.updateState.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/api/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
  }

  handleInput(stateName, stateProp, event) {
    let tempObj = this.state[stateName];
    tempObj[stateProp] = event.target.value;
    this.setState({[stateName]: tempObj})
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
      this.setState({[stateToUpdate]: tempArray})
    }
    else {
      this.setState({[stateToUpdate]: [...this.state[stateToUpdate], newObject]})
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>

          <h3> Thumbnail </h3>
          <label htmlFor="thumbnail">Thumbnail Title</label>
          <input required id="thumbnail" name="thumbnail" type="text" onChange={(e) => this.handleInput("thumbnail", "title", e)}/>

          <h3> Title </h3>
          <label htmlFor="title">Quiz Title</label>
          <input required id="title" name="title" type="text" onChange={(e) => this.handleInput("title", "text", e)}/>

          <h3> Results </h3>
          {this.state.resultOptions.map((question, i) =>
            <ResultFactory
              updateFunction={this.updateState}
              id={i}
              key={i} />)
          }


          <h3> Questions </h3>
          {this.state.questions.map((question, i) =>
            <QuestionFactory
              resultOptions={this.state.resultOptions}
              updateFunction={this.updateState}
              id={i}
              key={i} />)
          }


          <button>Send data!</button>
        </form>
      </div>
    );
  }
}

export default QuizFactory;
