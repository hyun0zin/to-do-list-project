import styled from "styled-components";

const StLi = styled.li`
  list-style-type: none;
  border: 5px solid rgb(155, 155, 161);
  border-radius: 10px;

  width: 300px;
  padding: 20px;
  margin: 10px;
`;

const StDiv = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 10px;
`;

const StButton = styled.button`
  width: 50%;
`;

const StP = styled.p`
  text-decoration: line-through;
`;

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

  const textDeco = () => {
    if (isDone === false) {
      return <p>{text}</p>;
    } else {
      return <StP>{text}</StP>;
    }
  };
  return (
    <StLi key={id} className="card">
      <h2>{title}</h2>
      {textDeco()}
      <p style={{ color: "red", fontWeight: "600" }}>
        DEADLINE : {changeDateType}
      </p>
      <StDiv className="button-container">
        <StButton
          type="button"
          className="btn btn-danger"
          onClick={() => removeCardBtn(id)}
        >
          Delete
        </StButton>
        &nbsp;
        <StButton
          type="button"
          className="btn btn-success"
          onClick={() => updateCardBtn(id)}
        >
          {isDone ? "Cancel" : "Done"}
        </StButton>
      </StDiv>
    </StLi>
  );
};

export default TodoCards;
