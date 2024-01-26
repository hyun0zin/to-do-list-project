const TodoCards = ({ item, removeCardBtn, updateCardBtn }) => {
  const { id, title, text, isDone } = item;
  return (
    <div key={id} className="cardList">
      <h2>{title}</h2>
      <p>{text}</p>
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
  );
};

export default TodoCards;
