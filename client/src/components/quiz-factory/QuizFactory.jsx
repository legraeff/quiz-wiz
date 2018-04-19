import React, { Component } from 'react';
import './QuizFactory.css';

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
    this.removeItem = this.removeItem.bind(this);
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

  removeItem(id, array) {
    let indexOfObject = this.state[array].map(o => o.id).indexOf(id);
    let tempArray = this.state[array];
    tempArray[indexOfObject]["isDeleted"] = true;
    this.setState({[array]: tempArray})
  }

  render() {
    return (
      <div>
        <h1 className="page-title"> Create your own quiz: </h1>
        <form onSubmit={this.handleSubmit}>

          <section className="factory-section">
            <h3 className="factory-section-title"> Thumbnail </h3>
            <div className="factory-item factory-item--single">
              <label htmlFor="thumbnail">Thumbnail Title</label>
              <input required id="thumbnail" name="thumbnail" type="text" onChange={(e) => this.handleInput("thumbnail", "title", e)}/>
            </div>
          </section>

          <section className="factory-section">
            <h3 className="factory-section-title"> Title </h3>
            <div className="factory-item factory-item--single">
              <label htmlFor="title">Quiz Title</label>
              <input required id="title" name="title" type="text" onChange={(e) => this.handleInput("title", "text", e)}/>
            </div>
          </section>

          <section className="factory-section">
            <h3 className="factory-section-title"> Results </h3>
            <div className="factory-group">
              {this.state.resultOptions.map((result, i) => {
                if (result.isDeleted) { return null };
                return <ResultFactory
                  removeFunction={this.removeItem}
                  updateFunction={this.updateState}
                  isLast={this.state.resultOptions.length === i + 1}
                  id={i}
                  key={i} />
                })
              }
            </div>
          </section>

          <section className="factory-section">
            <h3 className="factory-section-title"> Questions </h3>
            <div className="factory-group">
              {this.state.questions.map((question, i) => {
                if (question.isDeleted) { return null };
                return <QuestionFactory
                  removeFunction={this.removeItem}
                  resultOptions={this.state.resultOptions}
                  updateFunction={this.updateState}
                  isLast={this.state.questions.length === i + 1}
                  id={i}
                  key={i} />
                })
              }
            </div>
          </section>

          <button type="submit" className="factory-finish-button">Create my quiz!</button>
        </form>
      </div>
    );
  }
}

export default QuizFactory;
