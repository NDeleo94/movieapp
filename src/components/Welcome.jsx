import React, { useEffect } from "react";
import Modal from "./Modal";
import AddMovieModalForm from "./AddMovieModalForm";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../actions/authActions";
import { cleanMovies } from "../actions/movieActions";

const Welcome = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddMovie = (e) => {
    e.preventDefault();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(cleanMovies());
    dispatch(logout(auth.token));
  };

  useEffect(() => {
    dispatch(getUser(auth.token));
  }, []);

  return (
    <>
      <h1 className="text-center my-3">Bienvenido, Cacho!</h1>
      <div className="d-grid my-3 col-4 offset-4">
        <button
          className="btn btn-dark"
          onClick={handleAddMovie}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Movie
        </button>
        <Modal modalForm={<AddMovieModalForm />} />
      </div>
      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-dark" onClick={handleAddMovie}>
          My Movies
        </button>
      </div>
      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Welcome;
