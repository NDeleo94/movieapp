import React, { useContext } from "react";
import { LogginContext } from "../context/LogginContext";
import axios from "axios";

const Welcome = () => {
  const { setIsLogged } = useContext(LogginContext);

  const handleClick = (e) => {
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
        <button className="btn btn-danger" onClick={handleClick}>
          Cerrar Sesion
        </button>
      </div>
    </>
  );
};

export default Welcome;
