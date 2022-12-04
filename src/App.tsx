import React, { useState } from "react";
import "./App.css";
// rewriting react-inventory-dot
const App = () => {
  const name: string = "tom";

  return (
    <div className="App">
      <h1>hello, {name.toUpperCase()}</h1>
      <hr />
      <div className="box"></div>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
  );
};

export default App;
