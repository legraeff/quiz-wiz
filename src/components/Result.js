import React from 'react';

function Result(props) {
  if (props.resultData) {
    return (
      <div>
        <strong> {props.resultData.title} </strong>
        <p> {props.resultData.text} </p>
      </div>
    );
  }
  else {
    return (null)
  }
}


export default Result;
