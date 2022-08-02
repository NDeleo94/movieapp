import React from "react";
import { Link } from "react-router-dom";
import { getPoster } from "../utils/getPoster";
import styles from "../components styles/MovieGridItem.module.css";

const MovieGridItem = ({ movie }) => {
  return (
    <div className="col">
      <div className="card h-100 text-center bg-dark text-light">
        <Link to={"/detail/" + movie.id}>
          <img
            src={getPoster(movie.image)}
            className={`card-img-top ${styles.objetfit }`}
            alt={`poster ${movie.title}`}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.summary}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Added {movie.created_at.substring(0, 10)}
          </small>
          <br />
          <small className="text-muted">by {movie.username}</small>
        </div>
      </div>
    </div>
  );
};

export default MovieGridItem;
