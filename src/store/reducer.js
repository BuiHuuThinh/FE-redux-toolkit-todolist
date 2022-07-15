import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn ReactJS",
      due_date: "2022-07-15",
      status: "Pending",
    },
    {
      id: 2,
      title: "Learn Redux",
      due_date: "2022-07-15",
      status: "Pending",
    },
    {
      id: 3,
      title: "Build todo Application",
      due_date: "2022-07-15",
      status: "Pending",
    },
    {
      id: 4,
      title: "Start Learning",
      due_date: "2022-07-15",
      status: "Completed",
    },
    {
      id: 5,
      title: "Subscribe for React Tutorial",
      due_date: "2022-07-15",
      status: "Pending",
    },
  ],
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case ADD_TODO:
      return { todos: [...state.todos, payload] };
    case DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id !== payload) };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};