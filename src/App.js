import React, { Component } from 'react';
import './App.css';
import Content from './components/Content.jsx';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Content> </Content>
      </div>
    );
  }
}

export default App;
