const Form = ({ userInput, handleInputChange, handleSubmit }) => {
  return (
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
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        add song
      </button>
    </form>
  );
};

export default Form;
