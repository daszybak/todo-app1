import PostToDoRedux from "./redux-toolkit/todos/PostTodo";
import ToDoListRedux from "./redux-toolkit/todos/TodoList";
import { PostToDoMobx } from "./mobx/todos/PostTodo";
import { ToDoListMobX } from "./mobx/todos/TodoList";
import { PostToDoXST } from "./mobx-state-tree/todos/PostTodo";
import { ToDoListMobXST } from "./mobx-state-tree/todos/TodoList";

function App() {
  return (
    <div className="App">
      <h1>To Do App</h1>
      <h2>Redux Toolkit</h2>
      <PostToDoRedux />
      <ToDoListRedux />
      <hr />
      <h2>MobX</h2>
      <PostToDoMobx />
      <ToDoListMobX />
      <hr />
      <h2>MobX State Tree</h2>
      <PostToDoXST />
      <ToDoListMobXST />
    </div>
  );
}

export default App;
