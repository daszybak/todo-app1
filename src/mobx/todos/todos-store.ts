import { makeAutoObservable } from "mobx";
import { nanoid } from "@reduxjs/toolkit";
interface ToDo {
  id: string;
  title: string;
  content: string;
  date: string;
}

class TodosStore {
  todos: ToDo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title: string, content: string) {
    this.todos.push({
      id: nanoid(),
      title,
      content,
      date: new Date().toISOString(),
    });
  }
}

export const TodosStoreInstance = new TodosStore();
