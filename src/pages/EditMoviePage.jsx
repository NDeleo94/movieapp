import React from "react";
import { useParams } from "react-router-dom";
import EditMovieForm from "../components/EditMovieForm";

const EditMoviePage = () => {
  const {idMovie} = useParams()
  return (
    <div className="container">
      <h3 className="text-center">Edit Movie #{idMovie}</h3>
      <EditMovieForm />
    </div>
  );
};

export default EditMoviePage;
