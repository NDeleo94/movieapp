import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import Loading from "../components/Loading";
import logo from "../logo.svg";

const DetailPage = () => {
  const { auth } = useSelector((state) => state);
  const { idMovie } = useParams();

  const [movie, setMovie] = useState();
  const [comments, setComments] = useState([]);

  const [isLoadingMovie, setIsLoadingMovie] = useState(true);
  const [isLoadingComment, setIsLoadingComment] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/" + idMovie)
      .then(({ data }) => {
        setMovie(data);
        setIsLoadingMovie(false)
      })
      .catch((error) => alert(error));
  }, [idMovie]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/comments/movie/" + idMovie)
      .then(({ data }) => {
        console.log(data);
        setComments(data);
        setIsLoadingComment(false)
      })
      .catch((error) => alert(error));
  }, [idMovie]);

  if (isLoadingComment || isLoadingMovie) {
    console.log(idMovie);
    return <Loading />;
  }

  return (
    <div className="container text-center">
      <div className="col-8 offset-2">
        <img className="img-fluid" src={logo} alt="poster pelicula"></img>
      </div>

      <div className="">
        <h1>{movie.title}</h1>
        <p>
          <strong>Lenguaje: </strong>
          {movie.language}
        </p>
        <p>
          <strong>Géneros: </strong>
          {movie.genre}
        </p>
        <p>
          <strong>Fecha de Estreno: </strong>
          {movie.premiered}
        </p>
        <h1>Summary</h1>
        <p>{movie.summary}</p>
      </div>
      <hr />
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      {auth.token ? (
        <CommentForm id_user={auth.user.id} id_movie={idMovie} />
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailPage;
