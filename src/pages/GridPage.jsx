import React from "react";
import MoviesGrid from "../components/MoviesGrid";

const GridPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Movies</h1>
      <hr />
      <MoviesGrid />
    </div>
  );
};

export default GridPage;
