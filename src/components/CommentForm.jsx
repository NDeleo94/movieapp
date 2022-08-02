import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newComment } from "../actions/commentActions";

const CommentForm = ({ id_user, id_movie }) => {
  const dispatch = useDispatch();
  const initialState = { comment: "" };

  const [newDataComment, setNewDataComment] = useState(initialState);

  const { comment } = newDataComment;

  const handleChange = (e) => {
    const value = e.target.value;
    setNewDataComment({
      ...newDataComment,
      [e.target.id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      comment: comment,
      id_movie: id_movie,
      id_user: id_user,
    };

    dispatch(newComment(body));

    setNewDataComment(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <textarea
          className="form-control"
          id="comment"
          rows={3}
          placeholder="Comment here!"
          defaultValue={""}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid m-3">
        <button className="btn btn-danger" type="sumbit">
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
