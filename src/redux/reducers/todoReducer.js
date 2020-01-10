const todoReducer = (state = [1, 2, 3], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {}];
    case "REMOVE":
      return state.splice();
    default:
      return state;
  }
};

export default todoReducer;
