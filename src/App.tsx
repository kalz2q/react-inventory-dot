import React, { useState } from "react";
import "./App.css";

const Counter = (props: { color: string }) => {
  const [count, setCount] = useState(0);

  const countUp = () => setCount((prevCount) => prevCount + 1);

  return (
    <li style={{ backgroundColor: props.color }} onClick={() => countUp()}>
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
      <div>TOTAL INVENTORY: 3</div>
    </div>
  );
}

export default App;
