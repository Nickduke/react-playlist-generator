import './App.css';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import Header from './Header';
import Form from './Form';
import Playlist from './Playlist';

function App() {
  const [userInput, setUserInput] = useState('');
  const [songs, setSongs] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === '') {
      alert('Input field cannot be empty - please enter a song.');
    } else {
      const database = getDatabase(firebase);
      const dbRef = ref(database);

      push(dbRef, userInput);
      setUserInput('');
    }
  };

  const handleRemoveSong = (songId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${songId}`);

    remove(dbRef);
  };

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
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
      <Form
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        userInput={userInput}
      />
      <Playlist songs={songs} handleRemoveSong={handleRemoveSong} />
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
