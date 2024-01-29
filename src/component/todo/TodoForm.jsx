import { useState } from "react";

const TodoForm = ({ addSubmit }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState();

  /* 제목, 내용 추가 함수 */
  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addTextHandler = (event) => {
    setText(event.target.value);
  };

  /* 날짜 추가 함수 */
  const addDateHandler = (event) => {
    setDate(event.target.value);
  };

  /* card 추가하기 */
  const handleSubmit = (e) => {
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

    if (!date) {
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

    setTitle("");
    setText("");
    setDate();

    e.target.reset();
  };

  return (
    <form className="input-style" onSubmit={handleSubmit}>
      <div className="input-box">
        <div>
          Title &nbsp;
          <input
            className="title-class"
            value={title}
            onChange={addTitleHandler}
          />
        </div>
        <div>
          Content &nbsp;
          <input
            className="text-class"
            value={text}
            onChange={addTextHandler}
          />
        </div>
        <div>
          Deadline &nbsp;
          <input
            className="date-class"
            type="date"
            name="deadline"
            value={date}
            onChange={addDateHandler}
          />
        </div>
      </div>
      <button id="addBtn" type="submit" className="btn btn-outline-dark">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
