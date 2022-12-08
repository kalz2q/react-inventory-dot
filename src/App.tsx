import React from "react";
import "./App.css";
// react-inventory-dot
const { useState } = React;

const App = () => {
  const name: string = "fujiwara no kamatari, asukajidai";
  const [colors, setColors] = useState<Color[]>([
    {
      id: 3,
      color: "tomato",
      number: 3
    },
    {
      id: 138,
      color: "skyblue",
      number: 2
    },
    {
      id: 100,
      color: "limegreen",
      number: 1
    }
  ]);

  type Color = {
    id: number;
    color: string;
    number: number;
  };

  const countUp = (id: number) => {
    const newColors = colors.map((color) => {
      if (color["id"] === id) {
        color.number++;
      }
      return color;
    });
    setColors(newColors);
  }

  return (
    <div className="App">
      <h1>hello, {name.toUpperCase() + "!!!!!"}</h1>
      <hr />
      <div className="container">
        <ul>
          {colors.map((color) => {
            return (
              <li key={color["id"]} style={{ backgroundColor: color["color"] }} onClick={() => countUp(color["id"])}>
                {color.color}:{color.number}
              </li>
            );
          })}
        </ul>
        <div>Total Inventory: 3</div>
      </div>
    </div>
  );
};

export default App;
