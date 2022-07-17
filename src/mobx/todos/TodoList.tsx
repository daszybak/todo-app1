import { observer } from "mobx-react";
import TimeAgo from "./TimeAgo";

import { TodosStoreInstance } from "./todos-store";

const ToDoList = () => {
  const renderedPosts = TodosStoreInstance.todos.map(
    ({ id, title, content, date }) => (
      <article key={id}>
        <h3>{title}</h3>
        <p>{content}</p>
        <p className="postCredit">
          <TimeAgo timestamp={date} />
        </p>
      </article>
    )
  );

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export const ToDoListMobX = observer(ToDoList);
