import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  let [input, handleInput] = useState("");

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={input}
        onChange={event => handleInput((input = event.target.value))}
      />
      <button onClick={() => handleInput((input = ""))}>Reset</button>
      <button>Submit</button>
    </div>
  );
};

export default Input;
