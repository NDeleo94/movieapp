import { types } from "../types/types";

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.movieAdd:
      return {
        ...state,
        movies: action.payload,
      };

    case types.movieRead:
      return {
        ...state,
        movies: action.payload,
      };

    case types.movieDelete:
      return {
        ...state,
        movies: state.favoritas.filter((elemento) => {
          return elemento.id !== action.payload;
        }),
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
