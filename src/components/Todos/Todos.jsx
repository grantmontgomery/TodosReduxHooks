import React from "react";
import { Todo } from "../Todo";
import { useSelector } from "react-redux";
import "./Todos.css";

const Todos = () => {
  const todos = useSelector(state => state.todoReducer);
  return (
    <div className="todos-wrapper">
      {todos.map(todo => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
  );
};

export default Todos;
