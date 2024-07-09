import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
