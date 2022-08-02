import { types } from "../types/types";

const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.commentAdd:
      return {
        ...state,
        comments: state.comments.concat(action.payload),
      };

    case types.commentRead:
      return {
        ...state,
        comments: action.payload,
      };

    case types.commentClean:
      return {
        ...state,
        comments: [],
      };

    default:
      return state;
  }
};