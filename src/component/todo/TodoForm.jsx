const TodoForm = ({
  title,
  text,
  addTitleHandler,
  addTextHandler,
  addSubmit,
}) => {
  return (
    <form className="input-style" onSubmit={addSubmit}>
      Title &nbsp;
      <input className="title-class" value={title} onChange={addTitleHandler} />
      &nbsp; Content &nbsp;
      <input className="text-class" value={text} onChange={addTextHandler} />
      <button id="addBtn" type="submit" className="btn btn-outline-dark">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
