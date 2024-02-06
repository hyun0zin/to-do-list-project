import { useState } from "react";
import styled from "styled-components";

const StForm = styled.form`
  background-color: rgb(235, 235, 235);
  border-radius: 20px;
  height: 75px;

  display: flex;
  align-items: center;

  position: relative;
  padding: 15px;
  margin: 10px;
`;

const StDiv = styled.div`
  gap: 1rem;

  display: flex;
  flex-direction: row;
`;

const StInput = styled.input`
  border-color: transparent;
  border-radius: 5px;
  width: 7rem;
`;

const StButton = styled.button`
  position: absolute;
  right: 50px;
  border-radius: 10px;
  width: 5rem;
`;

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
    if (!title.trim() && text) {
      alert("제목을 입력해주세요.");
      return;
    } else if (!text.trim() && title) {
      alert("내용을 입력해주세요.");
      return;
    } else if (!title.trim() && !text.trim()) {
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
    <StForm onSubmit={handleSubmit}>
      <StDiv>
        <div>
          Title &nbsp;
          <StInput value={title} onChange={addTitleHandler} />
        </div>
        <div>
          Content &nbsp;
          <StInput value={text} onChange={addTextHandler} />
        </div>
        <div>
          Deadline &nbsp;
          <StInput
            style={{ width: "8.5rem" }}
            type="date"
            name="deadline"
            value={date}
            onChange={addDateHandler}
          />
        </div>
      </StDiv>
      <StButton id="addBtn" type="submit" className="btn btn-outline-dark">
        Add
      </StButton>
    </StForm>
  );
};

export default TodoForm;
