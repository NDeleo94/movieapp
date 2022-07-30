import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const MovieGridItem = () => {
  return (
    <div className="col">
      <div className="card h-100 text-center bg-dark text-light">
        <h5 className="card-title">Titulo</h5>
        <Link to={"/detail/1"}>
          <img src={logo} className="card-img-top" alt="..." />{" "}
        </Link>
        <div className="card-body">
          <p className="card-text">Summary movie</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default MovieGridItem;
