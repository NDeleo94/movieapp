import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import Loading from "../components/Loading";
import styles from "../pages styles/DetailPage.module.css";
import { getPoster } from "../utils/getPoster";
import { deleteFav, newFav } from "../actions/favActions";
import { getComments } from "../actions/commentActions";

const DetailPage = () => {
  const { auth, fav, comment } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { idMovie } = useParams();

  const [movie, setMovie] = useState();

  const [isLoadingMovie, setIsLoadingMovie] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [idFav, setIdFav] = useState(null);

  const initialToggle = () => {
    fav.favorites.forEach((item) => {
      if (item.id === parseInt(idMovie)) {
        setIdFav(item.id_fav);
        setToggle(true);
        return;
      }
    });
  };

  const favoriteToggle = () => {
    if (!toggle) {
      dispatch(newFav(idMovie));
    }
    dispatch(deleteFav(idFav));
    setToggle(!toggle);
  };

  const isAuth = () => {
    return !auth.token ? styles.hidden : "";
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/" + idMovie)
      .then(({ data }) => {
        setMovie(data);
        setIsLoadingMovie(false);
      })
      .catch((error) => alert(error));
    initialToggle();
  }, [idMovie]);

  useEffect(() => {
    dispatch(getComments(idMovie));
  }, [idMovie]);

  if (isLoadingMovie) {
    return <Loading />;
  }

  return (
    <div className="container text-center">
      <div className="col-8 offset-2 my-3 border border-dark border-2">
        <img
          className={`img-fluid`}
          src={getPoster(movie.image)}
          alt={`poster  ${movie.title}`}
        ></img>
      </div>
      <div className={isAuth()}>
        <button onClick={favoriteToggle} className={styles.favoriteButton}>
          <FontAwesomeIcon
            icon={toggle ? solid : regular}
            size="2x"
            style={{ color: "red" }}
          />
        </button>
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
      {comment.comments.map((item, index) => (
        <Comment key={index} comment={item} />
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
