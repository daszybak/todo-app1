import { createContext, useContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";
import { Todos } from "./todos/todos-model";
import { Users } from "./users/users-model";
import { users } from "../data/users";

const RootModel = types.model("RootModel", {
  todos: Todos,
  users: Users,
});

let initialState = RootModel.create({
  todos: {
    todos: [],
  },
  users: {
    users: users,
  },
});

const data = localStorage.getItem("rootState");
if (data) {
  const json = JSON.parse(data);
  if (RootModel.is(json)) {
    initialState = RootModel.create(json);
  }
}

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
  localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<RootInstance>(initialState);

export const ProviderMST = RootStoreContext.Provider;
export const useStore = () => {
  const store = useContext(RootStoreContext);
  if (store === undefined) {
    throw new Error("useStore must be used within a Provider");
  }
  return store;
};
