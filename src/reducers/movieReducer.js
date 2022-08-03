import { types } from "../types/types";

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieAdd:
      return {
        ...state,
        movies: state.movies.concat(action.payload),
      };

    case types.movieRead:
      return {
        ...state,
        movies: action.payload,
      };

    case types.movieEdit:
      return {
        ...state,
        movies: state.movies
          .filter((elemento) => elemento.id !== action.payload.id)
          .concat(action.payload)
          .sort((a, b) => a.id - b.id),
      };

    case types.movieDelete:
      return {
        ...state,
        movies: state.movies.filter(
          (elemento) => elemento.id !== action.payload.id
        ),
      };

    case types.movieClean:
      return {
        ...state,
        movies: [],
      };

    default:
      return state;
  }
};
