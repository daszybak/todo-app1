import { types } from "mobx-state-tree";

export const User = types.model("User", {
  id: types.string,
  name: types.string,
});

export const Users = types.model("Users", {
  users: types.array(User),
});
