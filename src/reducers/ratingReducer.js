import { types } from "../types/types";

const initialState = {
  movieRating: [],
};

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ratingAdd:
      return {
        ...state,
        movieRating: state.movieRating.concat(action.payload),
      };

    case types.ratingRead:
      return {
        ...state,
        movieRating: action.payload,
      };

    case types.ratingEdit:
      return {
        ...state,
        movieRating: [].concat(action.payload),
      };

    case types.ratingClean:
      return {
        ...state,
        movieRating: [],
      };

    default:
      return state;
  }
};
