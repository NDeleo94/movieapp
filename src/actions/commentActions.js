import axios from "axios";
import { types } from "../types/types";
import { baseURL } from "../utils/baseURL";

export const newComment = (body) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(baseURL + "comments", body, config);

    dispatch(addComment(data));
  };
};

export const getComments = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(
      baseURL + "comments/movie/" + id,
      {},
      config
    );

    dispatch(readComment(data));
  };
};

export const addComment = (comment) => {
  return {
    type: types.commentAdd,
    payload: comment,
  };
};

export const readComment = (comment) => {
  return {
    type: types.commentRead,
    payload: comment,
  };
};

export const cleanComment = () => {
  return {
    type: types.commentClean,
  };
};
