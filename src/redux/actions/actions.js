const addTodo = input => {
  return {
    type: "ADD",
    payload: input
  };
};

const removeTodo = todo => {
  return {
    type: "REMOVE",
    payload: todo
  };
};

//Combined

const actions = { addTodo, removeTodo };

export default actions;
