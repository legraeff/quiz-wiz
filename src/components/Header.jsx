import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <nav className="navbar">
        <a className="nav-logo nav-item" href="/home">Quiz Wiz</a>
        <div className="nav">
          <Link to="/" className="nav-item">Popular Quizzes</Link>
          <Link to="/recent" className="nav-item">Recent Quizzes</Link>
        </div>
      </nav>
    )
  }
}

export default Header
