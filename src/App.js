import './App.css';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import Header from './Header';
// import Form from './Form';
// import Playlist from './Playlist';

function App() {
  const [songs, setSongs] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    push(dbRef, userInput);
    setUserInput('');
  };

  const handleRemoveSong = (songId) => {
    console.log(songId);
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${songId}`);

    remove(dbRef);
  };

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      // console.log(response.val());
      const data = response.val();

      const newState = [];
      for (let key in data) {
        newState.push({
          key: key,
          name: data[key],
        });
      }
      setSongs(newState);
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      <form
        action='submit'
        onSubmit={() => {
          handleSubmit(userInput);
        }}
      >
        <label htmlFor='newSong'>Add a song to your playlist!</label>
        <input
          type='text'
          id='newSong'
          onChange={handleInputChange}
          value={userInput}
        />
        <button onClick={handleSubmit}>add song</button>
      </form>
      <section className='playlist'>
        {setUserInput !== '' ? (
          <ul>
            {songs.map((song) => {
              return (
                <li key={song.key}>
                  <p>{song.name}</p>
                  <button
                    onClick={() => {
                      handleRemoveSong(song.key);
                    }}
                  >
                    Remove Song
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          alert(`Input cannot be empty - please enter a song.`)
        )}
      </section>
    </div>
  );
}

export default App;

// MVP
// Create app tthat allows user to a song to a playlist and store in db

// STRETCH
// Have separate inputs for artist name and song

// APP Component
// Track state of songs [songs, setSongs]
// Create function handleRemoveSong
// Use useEffect and store onValue event listener within
// Iterate through data using for in loop
// Update songs state to match db values
// Pass props down to form comp

// HEADER Component (stateless)

// FORM Component
// Track state of input change [userInput, setUserInput] then set within handleInputChange function
// Create handleSubmit function to prevent default form behaviour, create db ref and push to userInput state of db

// PLAYLIST Component
// -SONG Component
