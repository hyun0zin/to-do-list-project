import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoOrder from "./TodoOrder";

const todoObj = {
  id: 1,
  title: "리액트 공부하기",
  text: "리액트 기초를 공부해봅시다.",
  date: "2024-01-26",
  isDone: false,
};

const TodoController = () => {
  const [cards, setCards] = useState([todoObj]);

  // card 추가하기
  const addSubmit = (nextCard) => {
    setCards((cards) => [nextCard, ...cards]);
  };

  //card 삭제하기 버튼
  const removeCardBtn = (id) => {
    // alert("hi");
    const removeCards = cards.filter((card) => card.id !== id);
    setCards(removeCards);
  };

  // 완료/취소 버튼
  const updateCardBtn = (id) => {
    const updatedTodos = cards.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setCards(updatedTodos);
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
      <div className="section-container">
        <TodoList
          subTitle="Working...🔥"
          cards={workingCards}
          removeCardBtn={removeCardBtn}
          updateCardBtn={updateCardBtn}
        />
        <TodoList
          subTitle="Done🎉"
          cards={doneCards}
          removeCardBtn={removeCardBtn}
          updateCardBtn={updateCardBtn}
        />
      </div>
    </main>
  );
};

export default TodoController;
