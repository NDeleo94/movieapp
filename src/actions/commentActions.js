import axios from "axios";
import { types } from "../types/types";

export const newComment = (body) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/comments",
      body,
      config
    );

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
      "http://127.0.0.1:8000/api/comments/movie/" + id,
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
