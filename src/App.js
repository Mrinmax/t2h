import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Mainpage from './components/Mainpage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/mainpage">
              <Mainpage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>  
    </Router>  
  );
}

export default App;
