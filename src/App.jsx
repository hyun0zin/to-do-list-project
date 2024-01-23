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
      isDone: false,
    };
    setCards([...cards, newCards]);
    setTitle("");
    setText("");
    console.log(newCards);
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
        return (card.isDone = !card.isDone);
      }
      console.log(card.isDone);
    });
    setCards(updatedTodos);
  };

  return (
    <div className="app-style">
      <h1 className="headerStyle">My To-Do List</h1>
      <div className="inputStyle">
        <div>
          Title &nbsp;
          <input
            className="titleClass"
            value={title}
            onChange={addTitleHandler}
          />
          &nbsp; Content &nbsp;
          <input className="textClass" value={text} onChange={addTextHandler} />
        </div>
        <button
          id="addBtn"
          onClick={addClickBtn}
          type="button"
          className="btn btn-outline-dark"
        >
          Add
        </button>
      </div>
      <WorkingCards
        cards={cards}
        removeCardBtn={removeCardBtn}
        updateCard={updateCard}
      />

      <DoneCards
        cards={cards}
        removeCardBtn={removeCardBtn}
        updateCard={updateCard}
      />
    </div>
  );
};

export default App;
