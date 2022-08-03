import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { movieReducer } from "../reducers/movieReducer";
import { authReducer } from "../reducers/authReducer";
import { favReducer } from "../reducers/favReducer";
import { commentReducer } from "../reducers/commentReducer";
import { ratingReducer } from "../reducers/ratingReducer";

const reducers = combineReducers({
  auth: authReducer,
  movie: movieReducer,
  fav: favReducer,
  comment: commentReducer,
  rating: ratingReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
