import { UsersStoreInstance } from "../users/users-store";

const PostAuthor: React.FC<{ userId: string }> = ({ userId }) => {
  const author = UsersStoreInstance.users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
