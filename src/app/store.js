import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../features/user_api";
import userReducer from "../features/user_slice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
