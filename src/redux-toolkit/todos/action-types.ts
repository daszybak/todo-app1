export interface ToDo {
  id: string;
  title: string;
  authorId: string;
  content: string;
  date: string;
}

export type ToDoState = {
  todos: ToDo[];
};
