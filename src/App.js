import React from 'react';
import logo from './logo.svg';
import BIBLE from './bible'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BIBLE></BIBLE>
      </header>
    </div>
  );
}

export default App;
