const TodoCards = ({ item, removeCardBtn, updateCardBtn }) => {
  const { id, title, text, date, isDone } = item;

  /* Date type 변경하기 */
  const numberOfDate = new Date(date);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const changeDateType = numberOfDate.toLocaleDateString("ko-KR", options);

  // const formattedDeadline = new Date(date).toLocaleDateString("ko-KR", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   weekday: "long",
  // });

  return (
    <li key={id} className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <p style={{ color: "red", fontWeight: "600" }}>
        DEADLINE : {changeDateType}
      </p>
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
    </li>
  );
};

export default TodoCards;
