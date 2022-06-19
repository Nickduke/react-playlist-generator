import Song from './Song';

const Playlist = ({ handleRemoveSong, songs }) => {
  return (
    <section className='playlist'>
      <h3 className='playlistTitle'>my greatest hits</h3>
      <Song songs={songs} handleRemoveSong={handleRemoveSong} />
    </section>
  );
};

export default Playlist;
