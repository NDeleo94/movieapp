import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieGridItem from "./MovieGridItem";
import NoResults from "./NoResults";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/")
      .then(({ data }) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (movies.length === 0) {
    return <NoResults text={"No se agregaron peliculas"} />;
  }

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {movies.map((movie, index) => (
        <MovieGridItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
