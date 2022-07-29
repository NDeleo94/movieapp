import React from "react";
import FavGrid from "../components/FavGrid";

const FavPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Tus Favoritas</h1>
      <hr />
      <FavGrid />
    </div>
  );
};

export default FavPage;
