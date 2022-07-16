import React from "react";
import "./App.css";

const countUp = (color: string) => {
  alert(color);
}

const Counter = (props: { color: string }) => {
  return (
    <li style={{ backgroundColor: props.color }} onClick={() => countUp(props.color)}>
      0
    </li>
  );
}


function App() {
  return (
    <div className="container">
      <ul>
        <Counter color="tomato" />
        <Counter color="skyblue" />
        <Counter color="limegreen" />
      </ul>
    </div>
  );
}

export default App;
