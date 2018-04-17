import React from 'react';

function Result(props) {
  if (props.resultData) {
    return (
      <div className="result">
        <div className="result-text">
          <h2 className="result-title"> {props.resultData.resultTitle} </h2>
          <p className="result-text"> {props.resultData.resultText} </p>
        </div>
        <div className="result-image">
          <img src={props.resultData.resultImagePath ? props.resultData.resultImagePath : 'assets/placeholder.png'} alt={props.resultData.text}/>
        </div>
      </div>
    );
  }
  else {
    return (null)
  }
}


export default Result;
