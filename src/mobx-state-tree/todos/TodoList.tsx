import { observer } from "mobx-react";
import { useStore } from "../root";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const ToDoList = () => {
  const {
    todos: { todos },
  } = useStore();

  const renderedPosts = todos.map(({ id, title, content, date, authorId }) => (
    <article key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p className="postCredit">
        <PostAuthor userId={authorId} />
        <TimeAgo timestamp={date} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export const ToDoListMobXST = observer(ToDoList);
