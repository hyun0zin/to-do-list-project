import React from "react";
import "./App.css";
import GlobalStyle from "GlobalStyle";
import Router from "shared/Router";
import CardContextProvider from "context/CardContext";

const App = () => {
  return (
    <>
      <CardContextProvider>
        <GlobalStyle />
        <Router />
      </CardContextProvider>
    </>
  );
};

export default App;
