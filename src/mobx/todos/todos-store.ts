import { makeAutoObservable } from "mobx";
import { nanoid } from "@reduxjs/toolkit";
interface ToDo {
  id: string;
  authorId: string;
  title: string;
  content: string;
  date: string;
}

class TodosStore {
  todos: ToDo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title: string, content: string, authorId: string) {
    this.todos.push({
      id: nanoid(),
      authorId,
      title,
      content,
      date: new Date().toISOString(),
    });
  }
}

export const TodosStoreInstance = new TodosStore();
