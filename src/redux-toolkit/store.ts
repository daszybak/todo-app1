import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todos/reducer";

const store = configureStore({
  reducer: {
    todos: toDoReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
