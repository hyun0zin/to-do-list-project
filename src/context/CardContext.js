import { createContext, useState } from "react";

export const CardContext = createContext(null);

function CardContextProvider({ children }) {
  const todoObj = {
    id: 1,
    title: "리액트 공부하기",
    text: "리액트 기초를 공부해봅시다.",
    date: "2024-01-26",
    isDone: false,
  };

  const [cards, setCards] = useState([todoObj]);
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

  return (
    <CardContext.Provider
      value={{ cards, setCards, removeCardBtn, updateCardBtn }}
    >
      {children}
    </CardContext.Provider>
  );
}
export default CardContextProvider;
