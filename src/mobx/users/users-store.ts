import { users } from "../../data/users";

class UsersStore {
  users = users;
}

export const UsersStoreInstance = new UsersStore();
