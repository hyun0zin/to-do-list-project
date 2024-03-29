import styled from "styled-components";
import TodoCards from "./TodoCards";

const StSection = styled.section`
  margin: 20px;
`;

const StUl = styled.ul`
  gap: 20px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TodoList = ({ subTitle, cards }) => {
  return (
    <StSection>
      <h2>{subTitle}</h2>
      <StUl className="card-container">
        {cards.map(function (todo) {
          return <TodoCards key={todo.id} todo={todo} />;
        })}
      </StUl>
    </StSection>
  );
};

export default TodoList;
