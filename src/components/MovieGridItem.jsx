import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const MovieGridItem = ({ movie }) => {
  return (
    <div className="col">
      <div className="card h-100 text-center bg-dark text-light">
        <h5 className="card-title">{movie.title}</h5>
        <Link to={"/detail/" + movie.id}>
          <img src={logo} className="card-img-top" alt="..." />{" "}
        </Link>
        <div className="card-body">
          <p className="card-text">{movie.summary}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Added {movie.created_at.substring(0, 10)}
          </small><br/>
          <small className="text-muted">
            by {movie.username}
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieGridItem;
