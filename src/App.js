import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ProjectList } from './components/ProjectList';
import { About } from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App vh-100">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProjectList}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
