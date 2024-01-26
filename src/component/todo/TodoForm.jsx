const TodoForm = ({
  title,
  text,
  date,
  addTitleHandler,
  addTextHandler,
  addDateHandler,
  addSubmit,
}) => {
  return (
    <form className="input-style" onSubmit={addSubmit}>
      <div className="input-box">
        <div>
          Title &nbsp;
          <input
            className="title-class"
            value={title}
            onChange={addTitleHandler}
          />
        </div>
        <div>
          Content &nbsp;
          <input
            className="text-class"
            value={text}
            onChange={addTextHandler}
          />
        </div>
        <div>
          Deadline &nbsp;
          <input
            className="date-class"
            type="date"
            value={date}
            onChange={addDateHandler}
          />
        </div>
      </div>
      <button id="addBtn" type="submit" className="btn btn-outline-dark">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
