const addTodo = object => {
  return {
    type: "ADD",
    payload: { value: object.value, id: object.id }
  };
};

const removeTodo = id => {
  return {
    type: "REMOVE",
    payload: id
  };
};

//Combined

const actions = { addTodo, removeTodo };

export default actions;
