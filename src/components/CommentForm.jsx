import React from "react";

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <textarea
          className="form-control"
          id="inputTextarea"
          rows={3}
          placeholder="Comment here!"
          defaultValue={""}
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
