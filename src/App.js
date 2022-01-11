import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Unknown from './components/Unknown';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/navbar">
              <Navbar />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/unknown">
              <Unknown />
            </Route>
            <Redirect to="/unknown" />
          </Switch>
        </div>  
    </Router>  
  );
}

export default App;
