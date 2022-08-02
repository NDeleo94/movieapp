import axios from "axios";
import { types } from "../types/types";
import { getMyFav, readFav } from "./favActions";

export const UsernameAndPasswordLogin = (username, password) => {
  return async (dispatch) => {
    const body = {
      username: username,
      password: password,
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/auth/login/",
      body
    );

    dispatch(login(data.access_token));
  };
};

export const getUser = (token) => {
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/auth/me/",
      {},
      config
    );

    dispatch(login(token, data));
    dispatch(getMyFav(data.id));
  };
};

export const login = (token = {}, user = {}) => {
  return {
    type: types.login,
    payload: {
      token,
      user,
    },
  };
};

export const logout = (token) => {
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios.post("http://127.0.0.1:8000/api/auth/logout/", {}, config);

    dispatch({
      type: types.logout,
    });
  };
};
