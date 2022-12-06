import React from "react";
import "./App.css";
// from react-inventory-dot
const {useState, useEffect} = React;

const App = () => {
  const name: string = "tom";

  return (
    <div className="App">
      <h1>hello, {name.toUpperCase()}</h1>
      <hr />
      <div className="container">
        <ul>
          <li className="tomato">a</li>
          <li className="skyblue">b</li>
          <li className="limegreen">c</li>
        </ul></div>
    </div>
  );
};

export default App;
