import React, { useState } from "react";
import "./App.css";


const countUp = (color: string) => {
  alert(color);
}

const Counter = (props: { color: string }) => {
  const [count, setCount] = useState(10);
  return (
    <li style={{ backgroundColor: props.color }} onClick={() => countUp(props.color)}>
      {count}
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
