import React from "react";

const Welcome = () => {
  const handleClick = (e) => {
    e.preventDefault();
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
