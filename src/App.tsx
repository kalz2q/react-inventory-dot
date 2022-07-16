import React from "react";
import "./App.css";

type Props = {color: string}

// function Counter(props: { color: string}) {
class Counter extends React.Component {
  constructor (props: {} | Readonly<{}>) {
    super(props)
  }
  render() {
    return (
      <li style={{ backgroundColor: "red" }}>
        0
      </li>
    );
  }
}

function App() {
  return (
    <div className="container">
      <ul>
        <Counter  />
        <Counter  />
        <Counter  />
      </ul>
    </div>
  );
}

export default App;
