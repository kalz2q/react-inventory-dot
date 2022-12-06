import React from "react";
import "./App.css";
// from react-inventory-dot
const { useState } = React;

const App = () => {
  const [songs, setSongs] = useState([
    { title: "Song 1" },
    { title: "Song 2" },
    { title: "Song 3" }
  ]);

  // const generateID: number = () => (Object.length)

  const addSong = () => {
    setSongs([...songs, { title: "New Song" }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (<li key={3}>{song.title}</li>);
        })}
      </ul>
      <button onClick={addSong}>Add Song</button>
    </div>
  );
}



export default App;
