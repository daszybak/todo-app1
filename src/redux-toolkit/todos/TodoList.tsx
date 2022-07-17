import { useSelector } from "react-redux";
import { selectTodos } from "./selectors";

import TimeAgo from "./TimeAgo";

const ToDoList = () => {
  const todos = useSelector(selectTodos);

  const renderedPosts = todos.map(({ id, title, content, date }) => (
    <article key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p className="postCredit">
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
