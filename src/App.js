import React from "react";
import { Input } from "./components";
import { Todos } from "./components";
import { Provider } from "react-redux";
import { createStore } from "redux";

//Store -> Globalized Store

//Action AddTodo

const Increment = todo => {
  return {
    type: "INCREMENT"
  };
};

const Decrement = () => {
  return {
    type: "DECREMENT"
  };
};

//Reducer

const todo = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(todo);

//Displat it in the console.l

store.subscribe(() => console.log(store.getState()));

//Dispatch

store.dispatch(Increment());

const App = () => {
  return (
    <div>
      <Input></Input>
      <Todos></Todos>
    </div>
  );
};

export default App;
