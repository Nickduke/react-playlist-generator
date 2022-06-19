import './App.css';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import Header from './Header';
import Form from './Form';
import Playlist from './Playlist';
import Footer from './Footer';

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
    <div className='app'>
      <div className='wrapper'>
        <Header />
        <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          userInput={userInput}
        />
        <Playlist songs={songs} handleRemoveSong={handleRemoveSong} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
