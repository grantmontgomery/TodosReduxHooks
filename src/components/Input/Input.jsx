import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";

const Input = () => {
  let [input, handleInput] = useState("");

  const addEx = (inputstate, event) => {
    event.preventDefault();
    return inputstate + "!";
  };

  const { addTodo } = actions;

  const dispatch = useDispatch();

  const handleSubmit = (
    event,
    dispatchParam,
    inputParam,
    actionParam,
    hookParam
  ) => {
    event.preventDefault();
    dispatchParam(actionParam({ value: inputParam, id: Math.random() }));
    hookParam((inputParam = ""));
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={input}
        onChange={event => handleInput((input = event.target.value))}
      />
      <button onClick={() => handleInput((input = ""))}>Reset</button>
      <button onClick={event => handleInput(addEx(input, event))}>
        Exclamation
      </button>
      <button
        onClick={event =>
          handleSubmit(event, dispatch, input, addTodo, handleInput)
        }
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
