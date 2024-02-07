import TodoHeader from "component/layout/Header";
import TodoController from "component/todo/TodoController";
import React from "react";
import styled from "styled-components";

const StDiv = styled.div`
  padding: 20px;

  min-width: 800px;
  max-width: 1200px;
`;

function Home() {
  return (
    <>
      <StDiv>
        <TodoHeader />
        <TodoController />
      </StDiv>
    </>
  );
}

export default Home;
