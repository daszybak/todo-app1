import { nanoid } from "@reduxjs/toolkit";
import { types } from "mobx-state-tree";

export const Todo = types.model({
  id: types.string,
  title: types.string,
  content: types.string,
  date: types.string,
});

export const Todos = types
  .model("CounterStore", {
    todos: types.array(Todo),
  })
  .actions((self) => ({
    addTodo(title: string, content: string) {
      self.todos.push({
        id: nanoid(),
        title,
        content,
        date: new Date().toISOString(),
      });
    },
  }));
