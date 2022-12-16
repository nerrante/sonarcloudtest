import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import ToggleButton from "./ToggleButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
            className="App-link"
            href="https://duckduckgo.com"
            target="_blank"
            rel="noopener noreferrer"
        >
          DuckDuckGo
        </a>
        <a
            className="App-link"
            href="https://species360.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Species360!
        </a>
        <Hello />
        <ToggleButton />
      </header>
    </div>
  );
}

export default App;
