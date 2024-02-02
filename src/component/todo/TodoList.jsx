import TodoCards from "./TodoCards";
import styled from "styled-components";

const StSection = styled.section`
  margin: 20px;
`;

const StUl = styled.ul`
  gap: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const TodoList = ({ cards, subTitle, removeCardBtn, updateCardBtn }) => {
  return (
    <StSection>
      <h2>{subTitle}</h2>
      <StUl className="card-container">
        {cards.map(function (todo) {
          return (
            <TodoCards
              key={todo.id}
              item={todo}
              removeCardBtn={removeCardBtn}
              updateCardBtn={updateCardBtn}
            />
          );
        })}
      </StUl>
    </StSection>
  );
};

export default TodoList;
