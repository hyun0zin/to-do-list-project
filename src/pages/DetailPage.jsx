import TodoCards from "component/todo/TodoCards";
import { CardContext } from "context/CardContext";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { cards } = useContext(CardContext);
  // console.log(cards[0].id);
  // console.log(params.id);
  // console.log(cards);

  const todo = cards.find((todo) => todo.id === params.id);
  // console.log(todo);
  const backToHomeClickHandler = () => {
    navigate("/");
  };
  return (
    <>
      <BackToHomeBtn onClick={backToHomeClickHandler}>홈으로</BackToHomeBtn>
      <CardContainer>
        <TodoCards todo={todo} />
      </CardContainer>
    </>
  );
}

export default DetailPage;

const CardContainer = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  padding: 1rem;
`;

const BackToHomeBtn = styled.button`
  border-color: transparent;
  background-color: transparent;
  padding: 1rem;
  font-weight: 600;
  font-size: larger;
`;
