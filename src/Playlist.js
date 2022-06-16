import Song from './Song';

const Playlist = ({ handleRemoveSong, songs }) => {
  return (
    <section className='playlist'>
      <Song songs={songs} handleRemoveSong={handleRemoveSong} />
    </section>
  );
};

export default Playlist;
