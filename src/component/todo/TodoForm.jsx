import { CardContext } from "context/CardContext";
import { useContext, useState } from "react";
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

const TodoForm = () => {
  const {
    addDateHandler,
    addTextHandler,
    addTitleHandler,
    handleSubmit,
    title,
    text,
    date,
  } = useContext(CardContext);

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
