import React from "react";
import "./App.css";
// simplify to study the css
const { useState } = React;

const App = () => {
  const [colors, setColors] = useState<Color[]>([
    {
      id: 3,
      color: "orange",
      number: 0,
      total: 0
    },
    {
      id: 138,
      color: "skyblue",
      number: 0,
      total: 0
    },
    {
      id: 100,
      color: "limegreen",
      number: 0,
      total: 0
    },
    {
      id: 103,
      color: "red",
      number: 0,
      total: 0
    },
    {
      id: 101,
      color: "pink",
      number: 0,
      total: 0
    }
  ]);

  type Color = {
    id: number;
    color: string;
    number: number;
    total: number;
  };

  const calculateTotal = (colors: Color[]) => {
    let total = 0;
    for (let i: number = 0; i < colors.length; i++) {
      total += colors[i].number;
    };
    for (let i: number = 0; i < colors.length; i++) {
      colors[i].total = total;
    };
    return colors
  }

  const countUp = (id: number) => {
    let newColors = colors.map((color) => {
      if (color["id"] === id) {
        color.number++;
      }
      return color;
    });
    newColors = calculateTotal(newColors);
    setColors(newColors);
  }

  return (
    <div className="App">
      <h1>在庫管理 トータル付き</h1>
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
        <div>Total Inventory: {colors[0].total}</div>
      </div>
    </div>
  );
};

export default App;
