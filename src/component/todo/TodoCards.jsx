import { CardContext } from "context/CardContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StLi = styled.li`
  list-style-type: none;
  border: 5px solid rgb(155, 155, 161);
  border-radius: 10px;

  width: 300px;
  padding: 20px;
  margin: 10px;

  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
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

const TodoCards = ({ todo }) => {
  const { removeCardBtn, updateCardBtn } = useContext(CardContext);
  const { id, title, text, date, isDone } = todo;
  const navigate = useNavigate();

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

  const CardClickHandler = () => {
    if (todo.id === id) {
      navigate(`/detail/${todo.id}`);
    }
  };
  // console.log(todo.id);
  return (
    <StLi>
      <div key={id} onClick={CardClickHandler}>
        <h2>{title}</h2>
        {textDeco()}
        <p style={{ color: "red", fontWeight: "600" }}>
          DEADLINE : {changeDateType}
        </p>
      </div>
      <StDiv>
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
