const Form = ({ userInput, handleInputChange, handleSubmit }) => {
  return (
    <form
      action='submit'
      onSubmit={() => {
        handleSubmit(userInput);
      }}
    >
      <label htmlFor='newSong'>Add a song to your playlist: </label>
      <input
        type='text'
        id='newSong'
        onChange={handleInputChange}
        value={userInput}
        placeholder=''
      />
      <button
        className='addSong'
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        +
      </button>
    </form>
  );
};

export default Form;
