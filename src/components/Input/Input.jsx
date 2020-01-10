import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  let [input, handleInput] = useState("");

  const addEx = (inputstate, event) => {
    event.preventDefault();
    return inputstate + "!";
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
      <button>Submit</button>
    </div>
  );
};

export default Input;
