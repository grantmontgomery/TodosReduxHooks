import React from "react";
import "./Todo.css";

const Todo = props => {
  return <div className="todo-wrapper">{props.todo}</div>;
};

export default Todo;
