import React from "react";
import { actions } from "../../redux";
import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = props => {
  const { removeTodo } = actions;

  const dispatch = useDispatch();

  const { todo } = props;

  return (
    <div className="todo-wrapper">
      {todo.value}
      <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
    </div>
  );
};

export default Todo;
