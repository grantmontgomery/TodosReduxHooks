import React from "react";
import { useSelector } from "react-redux";
import "./Todos.css";
import todoReducer from "../../redux/reducers/todoReducer";

const Todos = () => {
  const todos = useSelector(state => state.todoReducer);
  return <div className="todos-wrapper">{todos}</div>;
};

export default Todos;
