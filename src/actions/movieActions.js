import { types } from "../types/types";
import axios from "axios";

export const newMovie = (body) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/movies/",
      body,
      config
    );

    dispatch(addMovie(data));
  };
};

export const getMyMovies = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/movies/user/" + id,
      {},
      config
    );

    dispatch(readMovie(data));
  };
};

export const updateMovie = (body, id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    console.log(body)
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(
      "http://127.0.0.1:8000/api/movies/" + id,
      body,
      config
    );

    console.log(data);

    dispatch(editMovie(data));
  };
};

export const deleteMovie = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.delete(
      "http://127.0.0.1:8000/api/movies/" + id,
      {},
      config
    );

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
