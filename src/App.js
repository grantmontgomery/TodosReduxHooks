import React from "react";
import { Input } from "./components";
import { Todos } from "./components";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Input></Input>
      <Todos></Todos>
    </div>
  );
};

export default App;
