import { useSelector } from "react-redux";
import MovieGridItem from "./MovieGridItem";
import NoResults from "./NoResults";

const FavGrid = () => {
  const { fav } = useSelector((state) => state);

  if (fav.favorites.length === 0) {
    return <NoResults text={"You not added favorites yet"} />;
  }

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {fav.favorites.map((item, index) => (
        <MovieGridItem key={index} movie={item} />
      ))}
    </div>
  );
};

export default FavGrid;
