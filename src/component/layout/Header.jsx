import styled from "styled-components";
const StH1 = styled.h1`
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoHeader = () => {
  return (
    <header>
      <StH1 className="header-style">My To-Do List</StH1>
    </header>
  );
};

export default TodoHeader;
