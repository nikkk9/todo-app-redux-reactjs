import React from "react";
import "./App.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Background />
      <Todo />
    </div>
  );
};

export default App;
