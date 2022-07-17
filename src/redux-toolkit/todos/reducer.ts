import { createReducer } from "@reduxjs/toolkit";
import type { ToDoState } from "./action-types";
import { addTodo } from "./actions";

const initialState: ToDoState = {
  todos: [],
};

const toDoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.todos.push(action.payload);
  });
});

export default toDoReducer;
