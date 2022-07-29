import React, { useState } from "react";
import MovieGridItem from "./MovieGridItem";
import NoResults from "./NoResults";

const FavGrid = () => {
  const [favMovies, setFavMovies] = useState([1,2,3]);

  if (favMovies.length === 0) {
    return <NoResults text={"Aun no agregas favoritas"} />;
  }

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {favMovies.map((favMovie) => (
        <MovieGridItem />
      ))}
    </div>
  );
};

export default FavGrid;
