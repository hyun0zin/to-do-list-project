import { CardContext } from "context/CardContext";
import { useContext } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoOrder from "./TodoOrder";

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoController = () => {
  const { cards, setCards } = useContext(CardContext);

  // card 추가하기
  const addSubmit = (nextCard) => {
    setCards((cards) => [nextCard, ...cards]);
  };

  // Todo 오름차순 정렬
  const sortCards = (order) => {
    const sortedCards = [...cards].sort((a, b) => {
      if (order === "asc") {
        return new Date(a.date) - new Date(b.date);
      }
      return new Date(b.date) - new Date(a.date);
    });
    setCards(sortedCards);
  };

  // useMemo
  const workingCards = cards.filter((card) => !card.isDone);
  const doneCards = cards.filter((card) => card.isDone);

  return (
    <main>
      <TodoForm addSubmit={addSubmit} />
      <TodoOrder sortCards={sortCards} />
      <StDiv>
        <TodoList subTitle="Working...🔥" cards={workingCards} />
        <TodoList subTitle="Done🎉" cards={doneCards} />
      </StDiv>
    </main>
  );
};

export default TodoController;
