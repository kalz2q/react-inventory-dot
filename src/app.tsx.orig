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
};

const AppBase = () => {
  // const counters
  return (
    <div className="container">
      <ul>
        {/* <Counter color="tomato" />
        <Counter color="skyblue" />
        <Counter color="limegreen" /> */}
        <Counter color="tomato" />
        <Counter color="skyblue" />
        <Counter color="limegreen" />
      </ul>
      <div>TOTAL INVENTORY: 3</div>
    </div>
  );
};

function App() {
  return <AppBase />;
}

export default App;
