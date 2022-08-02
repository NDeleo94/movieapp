import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../actions/authActions";
import { cleanMovies } from "../actions/movieActions";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { cleanFavs } from "../actions/favActions";

const Welcome = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(cleanMovies());
    dispatch(cleanFavs());
    dispatch(logout(auth.token));
  };

  useEffect(() => {
    dispatch(getUser(auth.token));
  }, []);

  if (!auth.user.username) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-center my-3">Bienvenido, {auth.user.username}!</h1>
      <Link to={"/user/addMovie"} style={{ textDecoration: "none" }}>
        <div className="d-grid my-3 col-4 offset-4">
          <button className="btn btn-dark">Add Movie</button>
        </div>
      </Link>

      <Link to={"/user/myMovies"} style={{ textDecoration: "none" }}>
        <div className="d-grid my-3 col-4 offset-4">
          <button className="btn btn-dark">My Movies</button>
        </div>
      </Link>

      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Welcome;
