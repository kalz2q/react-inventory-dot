import React from "react";
import "./App.css";
// from react-inventory-dot
const { useState } = React;

const App = () => {
  const [songs, setSongs] = useState<Song[]>([
    {
      "id": 3,
      "title": "Song 1"
    },
    {
      "id": 138,
      "title": "Song 2"
    },
    {
      "id": 100,
      "title": "Song 3"
    }
  ]);
  // const [songs, setSongs] = useState<Song[]>([]);

  type Song = {
    "id": number,
    "title": string
  }

  const addSong = () => {
    setSongs([...songs, {
      "id": generateid(songs),
      "title": "New Song"
    }]);
  };

  const generateid = (jsonData: Song[]) => {
    let newId = 0;
    if (jsonData.length !== 0) {
      let ids: number[] = [];
      for (let i = 0; i < jsonData.length; i++) {
        ids = [jsonData[i].id, ...ids]
      };
      ids.sort((a, b) => a - b);
      newId = ids[ids.length - 1] + 1
    }

    return newId
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (<li key={song["id"]}>{song["id"]} : {song["title"]}</li>);
        })}
      </ul>
      <button onClick={addSong}>Add Song</button>
    </div>
  );
}



export default App;
