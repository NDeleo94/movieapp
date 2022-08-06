import { types } from "../types/types";
import axios from "axios";
import { baseURL } from "../utils/baseURL";

export const newMovie = (body) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(baseURL + "movies", body, config);

    dispatch(addMovie(data));
  };
};

export const getMyMovies = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(baseURL + "movies/user/" + id, {}, config);

    dispatch(readMovie(data));
  };
};

export const updateMovie = (body, id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(baseURL + "movies/" + id, body, config);

    dispatch(editMovie(data));
  };
};

export const deleteMovie = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.delete(baseURL + "movies/" + id, {}, config);

    dispatch(delMovie(data));
  };
};

export const addMovie = (movie) => {
  return {
    type: types.movieAdd,
    payload: movie,
  };
};

export const editMovie = (movie) => {
  return {
    type: types.movieEdit,
    payload: movie,
  };
};

export const readMovie = (movie) => {
  return {
    type: types.movieRead,
    payload: movie,
  };
};

export const delMovie = (movie) => {
  return {
    type: types.movieDelete,
    payload: movie,
  };
};

export const cleanMovies = () => {
  return {
    type: types.movieClean,
  };
};
