import { useSelector } from "react-redux";
import { selectTodos } from "./selectors";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const ToDoList = () => {
  const todos = useSelector(selectTodos);

  const renderedPosts = todos.map(({ id, title, content, authorId, date }) => (
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

export default ToDoList;
