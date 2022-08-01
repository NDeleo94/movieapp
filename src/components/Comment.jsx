import React from "react";

const Comment = ({comment}) => {
  return (
    <div className="card bg-dark text-light my-3">
      <figure className="text-end mx-1">
        <blockquote className="blockquote">
          <p>{comment.comment}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {comment.username}
        </figcaption>
      </figure>
    </div>
  );
};

export default Comment;
