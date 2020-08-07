import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import Jokes from './components/Jokes';
import Header from './components/Header';

ReactDOM.render(
  <Router history= {createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render= {() => <Header><App /></Header>} /> 
      <Route path="/jokes" render= {() => <Header><Jokes /></Header>} /> 
    </Switch>
  </Router>, 
  document.getElementById('root')
);

