import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Quiz from './Quiz.jsx';

const Content = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/quiz-one' render={()=><Quiz quizId="0"/>}/>
    </Switch>
  </BrowserRouter>
)

export default Content
