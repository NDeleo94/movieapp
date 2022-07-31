import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { movieReducer } from "../reducers/movieReducer";
import { authReducer } from "../reducers/authReducer";
import { favReducer } from "../reducers/favReducer";

const reducers = combineReducers({
  auth: authReducer,
  movie: movieReducer,
  fav: favReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
