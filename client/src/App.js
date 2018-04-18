import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Content/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
