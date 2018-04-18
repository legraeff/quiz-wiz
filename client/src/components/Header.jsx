import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <nav className="navbar">
        <a className="navbar-logo" href="/home">Quiz Wiz</a>
        <div className="navbar-nav">
          <Link to="/recent" className="navbar-nav-item">Recent Quizzes</Link>
          <Link to="/quiz-factory" className="navbar-nav-item navbar-nav-item--right">+ Create your quiz</Link>
        </div>
      </nav>
    )
  }
}

export default Header
