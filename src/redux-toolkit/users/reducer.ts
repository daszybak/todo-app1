import { createReducer } from "@reduxjs/toolkit";
import { users } from "../../data/users";

const usersReducer = createReducer(users, (builder) => {});

export default usersReducer;
