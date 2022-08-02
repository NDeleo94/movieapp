import { types } from "../types/types";

const initialState = {
  favorites: [],
};

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.favAdd:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };

    case types.favRead:
      return {
        ...state,
        favorites: action.payload,
      };

    case types.favDelete:
      return {
        ...state,
        favorites: state.favorites.filter(
          (elemento) => elemento.id_fav !== action.payload.id
        ),
      };

    case types.favClean:
      return {
        ...state,
        favorites: [],
      };

    default:
      return state;
  }
};
