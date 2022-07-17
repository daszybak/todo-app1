import { createAction, nanoid, PrepareAction } from "@reduxjs/toolkit";
import { ToDo } from "./action-types";

export const addTodo = createAction<PrepareAction<ToDo>>(
  "todo/addToDo",
  (title: string, content: string, authorId: string) => {
    return {
      payload: {
        id: nanoid(),
        date: new Date().toISOString(),
        title,
        content,
        authorId,
      },
    };
  }
);
