export interface ToDo {
  id: string;
  title: string;
  content: string;
  date: string;
}

export type ToDoState = {
  todos: ToDo[];
};
