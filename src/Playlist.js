import Song from './Song';
import firebase from './firebase';
import { getDatabase, ref, remove } from 'firebase/database';

const Playlist = (props) => {
  const handleRemoveSong = (songId) => {
    console.log(songId);
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${songId}`);

    remove(dbRef);
  };
  return (
    <section className='playlist'>
      <ul>
        {
          (props.songs.map = (song) => {
            return (
              <li key={song.key}>
                <p>{<Song />}</p>
                <button
                  onClick={() => {
                    handleRemoveSong(song.key);
                  }}
                >
                  Remove Song
                </button>
              </li>
            );
          })
        }
        <li></li>
      </ul>
      Playlist: {<Song handleRemoveSong={handleRemoveSong} />};
    </section>
  );
};

export default Playlist;
