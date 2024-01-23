import React from "react";
import "./App.css";
import TodoHeader from "component/layout/Header";
import TodoController from "component/todo/TodoController";

const App = () => {
  return (
    <div className="app-style">
      <TodoHeader />
      <TodoController />
    </div>
  );
};

export default App;
