import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ProjectList } from './components/ProjectList';

function App() {
  return (
    <div className="App vh-100">
      <Navbar/>
      <ProjectList/>
    </div>
  );
}

export default App;
