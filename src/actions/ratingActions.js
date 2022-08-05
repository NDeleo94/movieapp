import { types } from "../types/types";
import axios from "axios";
import { baseURL } from "../utils/baseURL";

export const newRating = (body) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(baseURL + "ratings", body, config);

    dispatch(addRating(data));
  };
};

export const getRatingUserMovie = (idMovie) => {
  return async (dispatch, getState) => {
    const { token, user } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(
      baseURL + "ratings/user/" + user.id + "/movie/" + idMovie,
      {},
      config
    );

    dispatch(readRating(data));
  };
};

export const updateRating = (body, id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(baseURL + "ratings/" + id, body, config);

    dispatch(editRating(data));
  };
};

export const addRating = (rating) => {
  return {
    type: types.ratingAdd,
    payload: rating,
  };
};

export const editRating = (rating) => {
  return {
    type: types.ratingEdit,
    payload: rating,
  };
};

export const readRating = (rating) => {
  return {
    type: types.ratingRead,
    payload: rating,
  };
};

export const cleanRating = () => {
  return {
    type: types.ratingClean,
  };
};
