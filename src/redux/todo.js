const initState = {
  todos: [
    { id: 0, text: "go school", state: true, color: "red" },
    { id: 1, text: "go gym", state: false, color: "blue" },
  ],
};

export const todosMange = (state = initState, action) => {
  switch (action.type) {
    case "todo/addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todo/completeTodo":
      return {
        ...state,
        todos: [
          state.todos.map((x) =>
            x.id === action.payload.id ? { ...x, state: !x.state } : x
          ),
        ],
      };
    case "todo/deleteTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          state.todos.filter((x) => x.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
export default todosMange;
