import React from 'react';

function Result(props) {
  if (props.resultData) {
    if (props.resultData.resultImagePath) {
      var resultImage = (
        <div className="result-image">
          <img src={props.resultData.resultImagePath} alt={props.resultData.text}/>
        </div>
      )
    }
    return (
      <div className="result">
        <div>
          <h2 className="result-title"> {props.resultData.resultTitle} </h2>
          <p className="result-text"> {props.resultData.resultText} </p>
          {resultImage}
        </div>
      </div>
    );
  }
  else {
    return (null)
  }
}


export default Result;
