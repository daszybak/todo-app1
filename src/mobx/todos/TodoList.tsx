import { observer } from "mobx-react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

import { TodosStoreInstance } from "./todos-store";

const ToDoList = () => {
  const renderedPosts = TodosStoreInstance.todos.map(
    ({ id, title, content, authorId, date }) => (
      <article key={id}>
        <h3>{title}</h3>
        <p>{content}</p>
        <p className="postCredit">
          <PostAuthor userId={authorId} />
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
