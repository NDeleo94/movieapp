import axios from "axios";
import { types } from "../types/types";

export const newFav = (idMovie) => {
  return async (dispatch, getState) => {
    const { token, user } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const body = {
      id_user: user.id,
      id_movie: idMovie,
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/favorites",
      body,
      config
    );

    dispatch(addFav(data));
  };
};

export const getMyFav = (id) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/favorites/user/" + id,
      {},
      config
    );

    dispatch(readFav(data));
  };
};

export const deleteFav = (idFav) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.delete(
      "http://127.0.0.1:8000/api/favorites/" + idFav,
      {},
      config
    );

    dispatch(delFav(data));
  };
};

export const addFav = (fav) => {
  return {
    type: types.favAdd,
    payload: fav,
  };
};

export const readFav = (fav) => {
  return {
    type: types.favRead,
    payload: fav,
  };
};

export const delFav = (fav) => {
  return {
    type: types.favDelete,
    payload: fav,
  };
};

export const cleanFavs = () => {
  return {
    type: types.favClean,
  };
};
