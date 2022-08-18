import React, { useState } from "react";
import "./App.css";
// rewriting react-inventory-dot
const App = () => {
  const Counter = (props: { color: string }) => {
    const [count, setCount] = useState(0);

    const countUp = () => setCount((prevCount) => prevCount + 1);

    return (
      <li style={{ backgroundColor: props.color }} onClick={() => countUp()}>
        {count}
      </li>
    );
  };

  return (
    <div className="App">
      <div className="container">
        <ul className="inventoryList">
          {counters.map((counter) => (
            <li key={counter.id}>
              <div>
                
              </div>
            </li>
          ))}
        </ul>
        <div>TOTAL INVENTORY: 3</div>
      </div>
    </div>
  );
};

export default App;
