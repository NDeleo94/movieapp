import React, { useContext } from "react";
import { LogginContext } from "../context/LogginContext";
import axios from "axios";
import Modal from "./Modal";
import AddMovieModalForm from "./AddMovieModalForm";

const Welcome = () => {
  const { setIsLogged } = useContext(LogginContext);

  const handleAddMovie = (e) => {
    e.preventDefault();
  };

  const handleLogout = (e) => {
    e.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .post("http://127.0.0.1:8000/api/auth/logout/", {}, config)
      .then(({ data }) => {
        console.log(data);
        setIsLogged(false);
      })
      .catch((error) => console.log(error));
  };

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
        <Modal modalForm={<AddMovieModalForm/>}/>
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
