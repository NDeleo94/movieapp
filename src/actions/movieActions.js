import { types } from "../types/types";
import axios from "axios";

export const addMovie = (body) => {
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

    console.log(data);

    dispatch(newMovie(data));
  };
};

export const editMovie = (body, id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(
      "http://127.0.0.1:8000/api/movies/" + id,
      body,
      config
    );

    console.log(data);

    dispatch(newMovie(data));
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

    console.log(data);

    dispatch(newMovie(data));
  };
};

export const newMovie = (movie) => {
  return {
    type: types.movieAdd,
    payload: movie,
  };
};

export const cleanMovies = () => {
  return {
    type: types.movieClean,
  };
};
