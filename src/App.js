import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ProjectList } from './components/ProjectList';
import { ProjectDetail } from './components/ProjectDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  if (window.event) {
    <Route exact path='/' component={ProjectList}/>
  }
  return (
    <Router>
      <div className="App vh-100">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProjectList}/>
          <Route path='/:id' component={ProjectDetail}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
