import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Quiz from './quiz/Quiz.jsx';
import Home from './Home.jsx';
import QuizFactory from './quiz-factory/QuizFactory.jsx';

const Content = () => (
  <Switch>
    <Route path='/quiz/:id' component={Quiz}/>
    <Route path='/home' component={Home}/>
    <Route path='/quiz-factory' component={QuizFactory}/>
    <Route path='/' component={Home}/>
  </Switch>
)

export default Content
