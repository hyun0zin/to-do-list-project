const TodoForm = ({
  title,
  text,
  addTitleHandler,
  addTextHandler,
  addSubmit,
}) => {
  return (
    <form className="inputStyle" onSubmit={addSubmit}>
      Title &nbsp;
      <input className="titleClass" value={title} onChange={addTitleHandler} />
      &nbsp; Content &nbsp;
      <input className="textClass" value={text} onChange={addTextHandler} />
      <button id="addBtn" type="submit" className="btn btn-outline-dark">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
