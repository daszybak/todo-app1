import type { RootState } from "../store";

export const selectTodos = (state: RootState) => state.todos.todos;
