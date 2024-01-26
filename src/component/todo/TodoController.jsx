import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todoObj = {
  id: 1,
  title: "리액트 공부하기",
  text: "리액트 기초를 공부해봅시다.",
  date: "2024년 1월 26일 금요일",
  isDone: false,
};

const TodoController = () => {
  const [cards, setCards] = useState([todoObj]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState();

  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addTextHandler = (event) => {
    setText(event.target.value);
  };

  // 날짜 추가 함수 & 날짜 type 변경
  const addDateHandler = (event) => {
    const numberOfDate = new Date(event.target.value);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };

    const changeDateType = numberOfDate.toLocaleDateString("ko-KR", options);
    // console.log(changeDateType);
    setDate(changeDateType);
  };

  // card 추가하기
  const addSubmit = (e) => {
    e.preventDefault();

    //빈 input 추가 막기
    if (!title && text) {
      alert("제목을 입력해주세요.");
      return;
    } else if (!text && title) {
      alert("내용을 입력해주세요.");
      return;
    } else if (!title && !text) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const newCards = {
      id: cards.length + 1,
      title,
      text,
      date,
      isDone: false,
    };
    setCards([...cards, newCards]);
    setTitle("");
    setText("");

    e.target.reset();
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

  const workingCards = cards.filter((card) => !card.isDone);
  const doneCards = cards.filter((card) => card.isDone);

  return (
    <main>
      <TodoForm
        addTitleHandler={addTitleHandler}
        addTextHandler={addTextHandler}
        addDateHandler={addDateHandler}
        addSubmit={addSubmit}
      />
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
