import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestGeolocation from './testGeolocation';
import TestWatchPosition from './testWatchPosition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestGeolocation />
        <TestWatchPosition />
      </header>
    </div>
  );
}

export default App;
