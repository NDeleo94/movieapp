import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../actions/movieActions";

const TableRow = ({ movie, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/user/edit/movie/" + movie.id);
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    navigate("/user/myMovies");
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.created_at.substring(0, 10)}</td>
      <td>
        <button className="btn btn-dark col-6" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger col-6" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
