import './App.css';

function App() {
  return <div className='App'></div>;
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

// Potentially havee a SONG component

// FORM Component
// Track state of input change [userInput, setUserInput] then set within handleInputChange function
// Create handleSubmit function to prevent default form behaviour, create db ref and push to userInput state of db
