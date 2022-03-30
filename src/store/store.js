import { configureStore } from "@reduxjs/toolkit";
import { quotesReducer } from "../features/quotesSlice";
import { usersReducer } from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    quotes: quotesReducer,
  },
});
