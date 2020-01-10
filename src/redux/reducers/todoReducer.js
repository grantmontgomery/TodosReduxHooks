const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.splice(state.indexOf(action.payload), 1);
    default:
      return state;
  }
};

export default todoReducer;
