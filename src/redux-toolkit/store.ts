import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todos/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    todos: toDoReducer,
    users: usersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
