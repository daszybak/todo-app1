import { useStore } from "../root";

const PostAuthor: React.FC<{ userId: string }> = ({ userId }) => {
  const {
    users: { users },
  } = useStore();

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
