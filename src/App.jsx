import React from "react";
import "./App.css";
import TodoHeader from "component/layout/Header";
import TodoController from "component/todo/TodoController";
import styled from "styled-components";
import GlobalStyle from "GlobalStyle";

const StDiv = styled.div`
  padding: 20px;

  min-width: 800px;
  max-width: 1200px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StDiv className="app-style">
        <TodoHeader />
        <TodoController />
      </StDiv>
    </>
  );
};

export default App;
