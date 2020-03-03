import moment from "moment";
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: state.length + 1,
          task: state.todo,
          completed: false,
          createdAt: moment(Date.now())
            .add(24, "hours")
            .format("LLL")
        }
      ];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "COMPLETED_TODO":
      return state.map(todo => {
        if (todo.id === action.index) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

    default:
      return state;
  }
};
