import React from "react";

const Comment = () => {
  return (
    <div className="card bg-dark text-light mt-3">
      <figure class="text-end mx-1">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default Comment;
