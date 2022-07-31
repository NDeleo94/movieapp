import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieGridItem from "./MovieGridItem";
import NoResults from "./NoResults";

const FavGrid = () => {
  const [favMovies, setFavMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/")
      .then(({ data }) => {
        setFavMovies(data);
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (favMovies.length === 0) {
    return <NoResults text={"Aun no agregas favoritas"} />;
  }

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {favMovies.map((favMovie, index) => (
        <MovieGridItem key={index} movie={favMovie} />
      ))}
    </div>
  );
};

export default FavGrid;
