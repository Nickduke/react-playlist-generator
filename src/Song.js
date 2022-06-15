const Song = (props) => {
  return (
    <ul className='songList'>
      <li>
        <p>Song name</p>
        <button onClick={props.handleRemoveSong}>Remove song</button>
      </li>
    </ul>
  );
};

export default Song;
