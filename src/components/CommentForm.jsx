import React, { useState } from "react";
import axios from "axios";

const CommentForm = () => {
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
      id_movie: 1,
      id_user: 1,
    };

    axios
      .post("http://127.0.0.1:8000/api/comments/", body)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log(error));

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
