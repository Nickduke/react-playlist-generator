const Song = ({ songs, handleRemoveSong }) => {
  return (
    <ul className='songList'>
      {songs.map((song) => {
        return (
          <li className='song' key={song.key}>
            <p className='songName'>{song.name}</p>
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
  );
};

export default Song;
