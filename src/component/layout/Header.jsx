import styled from "styled-components";
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StH1 = styled.h1`
  height: 50px;
  text-align: center;
`;

const TodoHeader = () => {
  return (
    <Header>
      <StH1>My To-Do List</StH1>
    </Header>
  );
};

export default TodoHeader;
