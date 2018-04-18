import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Quiz from './quiz/Quiz.jsx';
import RecentList from './RecentList.jsx';
import QuizFactory from './quiz-factory/QuizFactory.jsx';

const Content = () => (
  <Switch>
    <Route path='/quiz/:id' component={Quiz}/>
    <Route path='/home' component={RecentList}/>
    <Route path='/quiz-factory' component={QuizFactory}/>
    <Route path='/' component={RecentList}/>
  </Switch>
)

export default Content
