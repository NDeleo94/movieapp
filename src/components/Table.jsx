import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyMovies } from "../actions/movieActions";
import Loading from "./Loading";
import TableRow from "./TableRow";

const Table = () => {
  const dispatch = useDispatch();
  const { auth, movie } = useSelector((state) => state);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getMyMovies(auth.user.id));
  }, [auth]);

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered caption-top align-middle text-center mt-3">
        <caption>Your movies</caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">#ID Movie</th>
            <th scope="col">Movie</th>
            <th scope="col">Added</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {movie.movies.map((item, index) => (
            <TableRow key={index} movie={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="d-grid my-3 col-4 offset-4">
        <button className="btn btn-dark" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Table;
