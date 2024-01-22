import React from "react";
import "./App.css";
import { useState } from "react";
import WorkingCards from "component/WorkingCards";
import DoneCards from "component/DoneCards";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      text: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addTextHandler = (event) => {
    setText(event.target.value);
  };

  // card 추가하기 버튼
  const addClickBtn = () => {
    const newCards = {
      id: cards.length + 1,
      title,
      text,
    };
    setCards([...cards, newCards]);
    setTitle("");
    setText("");
  };

  //card 삭제하기 버튼
  const removeCardBtn = (id) => {
    // alert("hi");
    const removeCards = cards.filter((card) => card.id !== id);
    setCards(removeCards);
  };

  // 완료/취소 버튼
  const updateCard = (id) => {
    const updatedTodos = cards.map((card) => {
      if (card.id === id) {
        return { ...card, isDone: !card.isDone };
      } else {
        return { ...card };
      }
    });

    setCards(updatedTodos);
  };

  return (
    <div className="app-style">
      <h1 className="headerStyle">My To-Do List</h1>
      <div className="inputStyle">
        <div>
          제목 &nbsp;
          <input value={title} onChange={addTitleHandler} />
          &nbsp; 내용 &nbsp;
          <input value={text} onChange={addTextHandler} />
        </div>
        <button className="addBtn" onClick={addClickBtn}>
          추가하기
        </button>
      </div>
      <WorkingCards
        cards={cards}
        removeCardBtn={removeCardBtn}
        updateCard={updateCard}
        isDone={false}
      />
      <DoneCards
        cards={cards}
        removeCardBtn={removeCardBtn}
        updateCard={updateCard}
        isDone={true}
      />
    </div>
  );
};

export default App;
