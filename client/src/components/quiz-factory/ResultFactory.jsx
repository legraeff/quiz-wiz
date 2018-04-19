import React, { Component } from 'react';

class ResultFactory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      resultTitle: '',
      resultText: '',
      resultKey: ''
    };

    this.updateResultTitle = this.updateResultTitle.bind(this);
    this.updateResultText = this.updateResultText.bind(this);
    this.updateResultKey = this.updateResultKey.bind(this);
  }


  updateResultTitle(event) {
    this.setState({resultTitle: event.target.value}, ()=> { this.props.updateFunction(this.state, "resultOptions")});
  }
  updateResultText(event) {
    this.setState({resultText: event.target.value}, ()=> { this.props.updateFunction(this.state, "resultOptions")});
  }
  updateResultKey(event) {
    this.setState({resultKey: event.target.value}, ()=> { this.props.updateFunction(this.state, "resultOptions")});
  }

  render() {
    let removeButton;
    if (!this.props.isLast) {
      removeButton = <small className="remove-button" onClick={() => this.props.removeFunction(this.state.id, "resultOptions")}> REMOVE </small>
    }
    return (
      <div className="factory-item factory-item--double">
        <p> Result {this.state.id + 1} {removeButton} </p>
        <div>
          <label htmlFor={this.state.id + '-resultTitle'}>Result Title</label>
          <input id={this.state.id + '-resultTitle'} name={this.state.id + '-resultTitle'} type="text" onChange={this.updateResultTitle}/>
        </div>
        <div>
          <label htmlFor={this.state.id + '-resultText'}>Result Text</label>
          <textarea rows="5" id={this.state.id + '-resultText'} name={this.state.id + '-resultText'} type="text" onChange={this.updateResultText}></textarea>
        </div>
        <div>
          <label htmlFor={this.state.id + '-resultKey'}>Result Key</label>
          <input id={this.state.id + '-resultKey'} name={this.state.id + '-resultKey'} type="text" onChange={this.updateResultKey}/>
        </div>
      </div>
    );
  }
}

export default ResultFactory;
