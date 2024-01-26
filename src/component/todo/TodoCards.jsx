const TodoCards = ({ item, removeCardBtn, updateCardBtn }) => {
  const { id, title, text, date, isDone } = item;
  return (
    <div key={id} className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <p style={{ color: "red", fontWeight: "600" }}>{date}</p>
      <div className="button-container">
        <button
          id="removeBtn"
          type="button"
          className="btn btn-danger"
          onClick={() => removeCardBtn(id)}
        >
          Delete
        </button>
        &nbsp;
        <button
          id="completeBtn"
          type="button"
          className="btn btn-success"
          onClick={() => updateCardBtn(id)}
        >
          {isDone ? "Cancel" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default TodoCards;
