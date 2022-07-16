import React from 'react';
import './App.css';

const name: string = "taguchi"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello!!!! {name.toUpperCase()} </p>
        <hr></hr>
        <p>Hello!!!! {name.toUpperCase()} </p>
      </header>
    </div>
  );
}

export default App;
