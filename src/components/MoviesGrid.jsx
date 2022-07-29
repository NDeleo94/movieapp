import React, { useState } from "react";
import MovieGridItem from "./MovieGridItem";
import NoResults from "./NoResults";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([1, 2, 3, 4, 5, 6]);

  if (movies.length === 0) {
    return <NoResults text={"No se agregaron peliculas"} />;
  }

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {movies.map((movie) => (
        <MovieGridItem />
      ))}
    </div>
  );
};

export default MoviesGrid;
