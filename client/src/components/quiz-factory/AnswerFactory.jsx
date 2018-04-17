import React, { Component } from 'react';

class AnswerFactory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerTitle: '',
      id: props.id,
      answerId: props.id,
      questionId: props.questionId,
      pontuation: []
    };

    this.updateAnswerTitle = this.updateAnswerTitle.bind(this);
    this.updatePontuation = this.updatePontuation.bind(this);

  }

  updateAnswerTitle(event) {
    this.setState({answerTitle: event.target.value}, () => {
      this.props.updateFunction(this.state, "answers");
    });
  }

  updatePontuation(event) {
    let newPontuationObj = {
      "key": event.target.name,
      "value": event.target.value
    }
    let indexOfObject = this.state.pontuation.map(o => o.key).indexOf(newPontuationObj.key);
    if (indexOfObject >= 0) {
      let tempArray = this.state.pontuation;
      tempArray[indexOfObject] = newPontuationObj;
      this.setState({pontuation: tempArray}, () => {
        this.props.updateFunction(this.state, "answers");
      });
    }
    else {
      this.setState({pontuation: [...this.state.pontuation, newPontuationObj]}, () => {
        this.props.updateFunction(this.state, "answers");
      });
    }
  }

  render() {
    let resultOptionsLength = this.props.resultOptions.length - 1;
    return (
      <li>
        <div>
          <label htmlFor={this.state.questionId + '-' + this.state.id + '-title'}>Answer Title</label>
          <input id={this.state.id + '-title'} name={this.state.id + '-title'} type="text" value={this.state.answerTitle} onChange={this.updateAnswerTitle}/>
        </div>
        <div>
          { this.props.resultOptions.map((resultOption, i) => {
            if (resultOptionsLength === i) {
              return(null)
            };
            return(
              <div key={i}>
                <label htmlFor={this.state.questionId + '-' + this.state.id + '-' + resultOption.resultKey}>{resultOption.resultKey}</label>
                <input id={this.state.questionId + '-' + this.state.id + '-' + resultOption.resultKey} name={resultOption.resultKey} type="number" step=".1" onChange={this.updatePontuation}/>
              </div>
            )
          })
        }
        </div>
      </li>
    );
  }

}

export default AnswerFactory;
