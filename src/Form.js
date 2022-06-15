const Form = (props) => {
  return (
    <form
      action='submit'
      onSubmit={() => {
        props.handleSubmit(props.userInput);
      }}
    >
      <label htmlFor='newSong'>Add a song to your playlist!</label>
      <input
        type='text'
        id='newSong'
        onChange={props.handleInputChange}
        value={props.userInput}
      />
      <button
        onClick={(e) => {
          props.handleSubmit(e);
        }}
      >
        add song
      </button>
    </form>
  );
};

export default Form;
