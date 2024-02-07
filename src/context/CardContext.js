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
  const [addTitle, setAddTitle] = useState("");
  const [addText, setAddText] = useState("");
  const [addDate, setAddDate] = useState();

  // card 추가하기
  const addSubmit = (nextCard) => {
    setCards((cards) => [nextCard, ...cards]);
  };

  const { id, title, text, date, isDone } = todoObj;
  /* card 추가하기 */
  const handleSubmit = (e) => {
    e.preventDefault();

    //빈 input 추가 막기
    if (!addTitle.trim() && addText) {
      alert("제목을 입력해주세요.");
      return;
    } else if (!addText.trim() && addTitle) {
      alert("내용을 입력해주세요.");
      return;
    } else if (!addTitle.trim() && !addText.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    if (!addDate) {
      alert("마감기한을 입력해주세요.");
      return;
    }

    addSubmit({
      id: crypto.randomUUID(),
      title,
      text,
      date,
      isDone: false,
    });

    setAddTitle("");
    setAddText("");
    setAddDate();

    e.target.reset();
  };

  /* 제목, 내용 추가 함수 */
  const addTitleHandler = (event) => {
    setAddTitle(event.target.value);
  };

  const addTextHandler = (event) => {
    setAddText(event.target.value);
  };

  /* 날짜 추가 함수 */
  const addDateHandler = (event) => {
    setAddDate(event.target.value);
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

  /* Date type 변경하기 */
  const numberOfDate = new Date(date);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const changeDateType = numberOfDate.toLocaleDateString("ko-KR", options);

  return (
    <CardContext.Provider
      value={{
        cards,
        id,
        title,
        text,
        date,
        changeDateType,
        setCards,
        removeCardBtn,
        updateCardBtn,
        handleSubmit,
        addSubmit,
        addTitleHandler,
        addDateHandler,
        addTextHandler,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
export default CardContextProvider;
